<template>
	<Table>
		<template #head>
			<TableHead>Matéria</TableHead>
			<TableHead>Data</TableHead>
			<TableHead>Duração</TableHead>
			<TableHead></TableHead>
		</template>

		<template #body>
			<TableRow v-for="session in studySessions" :key="session.id">
				<TableItem>
					<span class="font-bold">{{ session.subject.name }}</span>
				</TableItem>
				<TableItem>
					<span>{{ getSessionDate(session) }}</span>
				</TableItem>
				<TableItem>
					<span>{{ getSessionDuration(session) }}</span>
				</TableItem>
				<TableItem>
					<div class="flex justify-end">
						<Button color="pink" size="xs" class="me-3" @click="openUpdateModal(session)">editar</Button>
						<Button color="red" size="xs" @click="openDeleteModal(session)">deletar</Button>
					</div>
				</TableItem>
			</TableRow>
		</template>
	</Table>

	<StudySessionUpdateModal :study-session="selectedSession" :active="updateModalActive" /> 

	<StudySessionDeleteModal :study-session="selectedSession" :active="deleteModalActive" />
</template>

<script lang="ts">
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useStudySessionStore, type StudySessionDto } from '../../stores/study-session.store';

import Button from '../base/button/Button.vue';
import Table from '../base/table/Table.vue';
import TableHead from '../base/table/TableHead.vue';
import TableRow from '../base/table/TableRow.vue';
import TableItem from '../base/table/TableItem.vue';
import StudySessionUpdateModal from './StudySessionUpdateModal.vue';
import StudySessionDeleteModal from './StudySessionDeleteModal.vue';

export default defineComponent({

	components: {
		Button,
		Table,
		TableHead,
		TableRow,
		TableItem,
		StudySessionUpdateModal,
		StudySessionDeleteModal,
	},

	data() {
		return {
			selectedSession: null,
			updateModalActive: 0,
			deleteModalActive: 0,
		};
	},

	computed: {

		...mapState(useStudySessionStore, [ 'studySessions' ]),

	},

	methods: {

		...mapActions(useStudySessionStore, {
			updateStudySessions: 'get',
		}),

		getSessionDate(session: StudySessionDto)
		{
			return dayjs(session.init).format('DD/MM/YYYY');
		},

		getSessionDuration(session: StudySessionDto)
		{
			return dayjs.duration(session.duration, 'minutes').format('HH:mm');
		},

		openUpdateModal(session: any)
		{
			this.selectedSession = session;
			this.updateModalActive++;
		},

		openDeleteModal(session: any)
		{
			this.selectedSession = session;
			this.deleteModalActive++;
		},
	},

	mounted() {
		if (this.studySessions.length === 0) {
			this.updateStudySessions();
		}
	},
});

</script>