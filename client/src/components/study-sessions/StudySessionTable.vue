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
					<button class="btn btn-primary me-3" @click="openUpdateModal(studySession)">edit</button>
					<button class="btn btn-danger" @click="openDeleteModal(studySession)">delete</button>	
				</div>
			</td>
		</tr>
	</Table>

	<StudySessionCreateModal :active="createModalActive" />

</template>

<script>
import Table from '../Table.vue';
import StudySessionCreateModal from './StudySessionCreateModal.vue';
import { mapState, mapActions } from 'pinia';
import { useStudySessionStore } from '../../stores/study-session.store.js'

import  duration  from 'dayjs/plugin/duration';
import dayjs from 'dayjs';
dayjs.extend(duration);

export default {

	components: { Table, StudySessionCreateModal },

	data()
	{
		return {
			createModalActive: 0,
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

	},

	beforeMount() {
		if (this.studySessions.length === 0)
			this.updateStudySessions();
	},

}
</script>
