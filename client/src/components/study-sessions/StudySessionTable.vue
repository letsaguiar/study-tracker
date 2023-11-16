<template>
	<button class="btn btn-success ms-3" @click="openCreateModal()">New Study Session</button>
	<table class="table align-items-center justify-content-center mb-0">
		<thead>
			<tr>
				<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Subject</th>
				<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
				<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Duration</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="study_session in study_sessions">
				<td class="px-3">
					<span class="text-sm fw-bold">{{ study_session.subject.name }}</span>
				</td>
				<td class="px-3">
					<span class="text-sm fw-bold">{{ getStudySessionDate(study_session) }}</span>
				</td>
				<td class="px-3">
					<span class="text-sm fw-bold">{{ getStudySessionDuration(study_session) }}</span>
				</td>
				<td class="px-3">
					<div class="d-flex justify-content-end">
						<button class="btn btn-primary me-3" @click="openUpdateModal(study_session)">edit</button>
						<button class="btn btn-danger" @click="openDeleteModal(study_session)">delete</button>	
					</div>
				</td>
			</tr>
		</tbody>
	</table>

	<StudySessionCreateModal :active="createModalActive" @create="getStudySessions()" />

	<StudySessionUpdateModal :active="updateModalActive" :study-session="studySessionToUpdate" @update="getStudySessions()" />

	<StudySessionDeleteModal :active="deleteModalActive" :study-session="studySessionToDelete" @delete="getStudySessions()" />

</template>

<script setup>
import StudySessionUpdateModal from './StudySessionUpdateModal.vue';
import StudySessionDeleteModal from './StudySessionDeleteModal.vue';
import StudySessionCreateModal from './StudySessionCreateModal.vue';

import { ref } from 'vue';
import dayjs from 'dayjs';

import { StudySessionService } from '../../http/StudySessionService';

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
	study_sessions.value = await new StudySessionService().getMany();
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