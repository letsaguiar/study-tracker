<template>
	<button class="btn btn-success ms-3" @click="openCreateModal()">Nova Sessão de Estudo</button>
	<Table :headers="['subject', 'date', 'duration', '']">
		<tr v-for="studySession in studySessions">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ studySession.subject.name }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatDate(studySession.init) }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatDuration(studySession.duration) }}</span>
			</td>
			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(studySession)">Editar</button>
					<button class="btn btn-danger" @click="openDeleteModal(studySession)">Deletar</button>	
				</div>
			</td>
		</tr>
	</Table>

	<StudySessionCreateModal :active="createModalActive" />

	<StudySessionUpdateModal :active="updateModalActive" :study-session="selectedStudySession" />

	<StudySessionDeleteModal :active="deleteModalActive" :study-session="selectedStudySession" />

</template>

<script>
import Table from '../Table.vue';
import StudySessionCreateModal from './StudySessionCreateModal.vue';
import StudySessionUpdateModal from './StudySessionUpdateModal.vue';
import StudySessionDeleteModal from './StudySessionDeleteModal.vue';
import { mapState, mapActions } from 'pinia';
import { useStudySessionStore } from '../../stores/study-session.store.js'

import  duration  from 'dayjs/plugin/duration';
import dayjs from 'dayjs';
dayjs.extend(duration);

export default {

	components: { Table, StudySessionCreateModal, StudySessionUpdateModal, StudySessionDeleteModal },

	data()
	{
		return {
			selectedStudySession: null,
			createModalActive: 0,
			updateModalActive: 0,
			deleteModalActive: 0,
		};
	},

	computed: {

		...mapState(useStudySessionStore, {
			studySessions: 'entries',
		}),

	},

	methods: {

		...mapActions(useStudySessionStore, {
			updateStudySessions: 'updateEntries',
		}),

		formatDate(date)
		{
			return dayjs(date).format('DD-MM-YYYY');
		},

		formatDuration(duration)
		{
			return dayjs.duration(duration, 'minutes').format("HH:mm");
		},

		openCreateModal()
		{
			this.createModalActive++;
		},

		openUpdateModal(studySession)
		{
			this.selectedStudySession = studySession;
			this.updateModalActive++;
		},

		openDeleteModal(studySession)
		{
			this.selectedStudySession = studySession;
			this.deleteModalActive++;
		}

	},

	beforeMount() {
		if (this.studySessions.length === 0)
			this.updateStudySessions();
	},

}
</script>
