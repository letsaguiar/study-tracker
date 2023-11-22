<template>
	<button class="btn btn-success ms-4" @click="openCreateModal()">Novo Exame</button>

	<Table :headers="['nome', 'primeira aplicação', 'segunda aplicação', '']">
		<tr v-for="exam in exams">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ exam.name }}</span>
			</td>	

			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatDate(exam.first_application_date) }}</span>
			</td>

			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatDate(exam.second_application_date) }}</span>
			</td>

			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(subject)">Editar</button>
					<button class="btn btn-danger" @click="openDeleteModal(subject)">Deletar</button>	
				</div>
			</td>
		</tr>
	</Table>

	<ExamCreateModal :active="createModalActive" />
</template>

<script>
import Table from '../Table.vue';
import ExamCreateModal from './ExamCreateModal.vue';
import { mapState, mapActions } from 'pinia';
import { useExamStore } from '../../stores/exam.store';
import dayjs from 'dayjs';

export default {

	components: { Table, ExamCreateModal },

	data() {
		return {
			createModalActive: 0,
		}
	},

	computed: {

		...mapState(useExamStore, {
			exams: 'entries',
		}),

	},

	methods: {
		
		...mapActions(useExamStore, {
			updateExams: 'updateEntries',
		}),

		formatDate(date)
		{
			if (date)
				return dayjs(date).format("DD-MM-YYYY");
			
			return '-';
		},

		openCreateModal()
		{
			this.createModalActive++;
		}

	},

	mounted()
	{
		if (this.exams.length === 0)
			this.updateExams();
	}

}
</script>
