<template>
	<button class="btn btn-success ms-3" @click="openCreateModal()">New Study Session</button>
	<Table :headers="['subject', 'date', 'duration', '']">
		<tr v-for="study_session in study_sessions">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ study_session.subject.name }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ getStudySessionDate(study_session) }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ getStudySessionDuration(study_session) }}</span>
			</td>
			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(study_session)">edit</button>
					<button class="btn btn-danger" @click="openDeleteModal(study_session)">delete</button>	
				</div>
			</td>
		</tr>
	</Table>

	<StudySessionCreateModal :active="createModalActive" @create="getStudySessions()" />

	<StudySessionUpdateModal :active="updateModalActive" :study-session="studySessionToUpdate" @update="getStudySessions()" />

	<StudySessionDeleteModal :active="deleteModalActive" :study-session="studySessionToDelete" @delete="getStudySessions()" />

</template>

<script setup>
import Table from '../Table.vue';
import StudySessionUpdateModal from './StudySessionUpdateModal.vue';
import StudySessionDeleteModal from './StudySessionDeleteModal.vue';
import StudySessionCreateModal from './StudySessionCreateModal.vue';

import { ref } from 'vue';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { StudySessionService } from '../../http/StudySessionService';

dayjs.extend(utc);

function getStudySessionDate(study_session)
{
	return (dayjs(study_session.init).format('DD-MM-YYYY'));
}

function getStudySessionDuration(study_session)
{
	const d1 = dayjs(study_session.init);
	const d2 = dayjs(study_session.end);
	
	return (d2.diff(d1, 'minutes') + ' minutes');
}

// Get Study Sessions
const study_sessions = ref([]);
async function getStudySessions()
{
	const raw_sessions = await new StudySessionService().getMany();
	study_sessions.value = raw_sessions.map((session) => ({
		...session,
		init: dayjs(session.init).local().toISOString(),
		end: dayjs(session.end).local().toISOString(),
	}));
}
getStudySessions();

// Open Create Modal
const createModalActive = ref(1);
function openCreateModal()
{
	createModalActive.value++;
}

// Open Update Modal
const updateModalActive = ref(1);
const studySessionToUpdate = ref(null);
function openUpdateModal(studySession)
{
	studySessionToUpdate.value = studySession;
	updateModalActive.value++;
}

// Open Delete Modal
const deleteModalActive = ref(1);
const studySessionToDelete = ref(null);
function openDeleteModal(studySession)
{
	studySessionToDelete.value = studySession;
	deleteModalActive.value++;
}
</script>