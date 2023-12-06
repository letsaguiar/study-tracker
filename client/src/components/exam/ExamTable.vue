<template>
	<Table>
		<template #head>
			<TableHead>nome</TableHead>
			<TableHead>primeiro dia de prova</TableHead>
			<TableHead>segundo dia de prova</TableHead>
			<TableHead></TableHead>
		</template>
  
		<template #body>
			<TableRow v-for="exam in exams" :key="exam.id">
				<TableItem>
					<span class="font-bold">{{ exam.name }}</span>
				</TableItem>
				<TableItem>
					<span>{{ formatDate(exam.first_application_date) }}</span>
				</TableItem>
				<TableItem>
					<span>{{ formatDate(exam.second_application_date) }}</span>
				</TableItem>
				<TableItem>
					<div class="flex justify-end">
						<Button color="pink" size="xs" class="me-3" @click="openUpdateModal(exam)">edit</Button>
						<Button color="red" size="xs" @click="openDeleteModal(exam)">delete</Button>
					</div>
				</TableItem>
			</TableRow>
		</template>
	</Table>

	<ExamUpdateModal :exam="selectedExam" :active="updateModalActive" />

	<ExamDeleteModal :exam="selectedExam" :active="deleteModalActive" />
</template>
  
<script lang="ts">
import { mapState, mapActions } from 'pinia';
import { defineComponent } from 'vue';
import { useExamStore } from '../../stores/exam.store';

import dayjs from 'dayjs';
  
import Button from '../base/button/Button.vue';
import Table from '../base/table/Table.vue';
import TableHead from '../base/table/TableHead.vue';
import TableItem from '../base/table/TableItem.vue';
import TableRow from '../base/table/TableRow.vue';
import ExamUpdateModal from './ExamUpdateModal.vue';
import ExamDeleteModal from './ExamDeleteModal.vue';
  
export default defineComponent({
  
	components: {
		Button,
		Table,
		TableHead,
		TableRow,
		TableItem,
		ExamUpdateModal,
		ExamDeleteModal,
	},
  
	data() {
		return {
			selectedExam: null,
			updateModalActive: 0,
			deleteModalActive: 0,
		};
	},
  
	computed: {

		...mapState(useExamStore, ['exams']),

	},
  
	methods: {

		...mapActions(useExamStore, {
			updateExams: 'get',
		}),

		formatDate(date?: string) {
			if (date)
				return dayjs(date).format('DD/MM/YYYY');

			return '-';
		},

		openUpdateModal(exam: any) {
			this.selectedExam = exam;
			this.updateModalActive++;
		},
  
		openDeleteModal(exam: any) {
			this.selectedExam = exam;
			this.deleteModalActive++;
		},

	},
  
	mounted() {
		if (!this.exams.length)
			this.updateExams();
	},

});
</script>
  