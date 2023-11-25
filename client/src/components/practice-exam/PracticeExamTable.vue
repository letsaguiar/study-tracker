<template>
	<Table :headers="['exame', 'data', 'número de questões', 'número de acertos', '']" >
		<tr v-for="practiceExam in practiceExams">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ practiceExam.exam?.name }}</span>
			</td>

			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatDate(practiceExam.date) }}</span>
			</td>

			<td class="px-4">
				<span class="text-sm fw-bold">{{ practiceExam.number_of_questions }}</span>
			</td>

			<td class="px-4">
				<span class="text-sm fw-bold">{{ practiceExam.number_of_hits }}</span>
			</td>

			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(practiceExam)">Editar</button>
					<button class="btn btn-danger" @click="openDeleteModal(practiceExam)">Deletar</button>	
				</div>
			</td>
		</tr>
	</Table>
</template>

<script>
import dayjs from 'dayjs';
import { mapActions, mapState } from 'pinia';
import { usePracticeExamStore } from '../../stores/practice-exam.store.js';
import Table from '../Table.vue';

export default {

	components: { Table },

	computed: {

		...mapState(usePracticeExamStore, {
			practiceExams: 'entries',
		}),

	},

	methods: {
	
		...mapActions(usePracticeExamStore, {
			updatePracticeExams: 'updateEntries',
		}),

		formatDate(date)
		{
			return dayjs(date).format('DD-MM-YYYY');
		},
	
	},

	mounted()
	{
		if (this.practiceExams.length == 0)
			this.updatePracticeExams();
	}

}
</script>