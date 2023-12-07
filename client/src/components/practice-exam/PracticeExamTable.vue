<template>
	<Table>
	  	<template #head>
			<TableHead>exame</TableHead>
			<TableHead>data</TableHead>
			<TableHead>porcentagem de acerto</TableHead>
			<TableHead></TableHead>
	 	</template>
  
	  	<template #body>
			<TableRow v-for="practiceExam in practiceExams" :key="practiceExam.id">
		  		<TableItem>
					<span class="font-bold">{{ practiceExam.exam.name }}</span>
		  		</TableItem>
		  		<TableItem>
					<span>{{ getPracticeExamDate(practiceExam) }}</span>
		  		</TableItem>
		  		<TableItem>
					<span>{{ practiceExam.hit_rate + '%' }}</span>
		  		</TableItem>
		  		<TableItem>
					<div class="flex justify-end">
						<Button color="pink" size="xs" class="me-3" @click="openUpdateModal(practiceExam)">editar</Button>
						<Button color="red" size="xs" @click="openDeleteModal(practiceExam)">deletar</Button>
					</div>
				</TableItem>
			</TableRow>
		</template>
	</Table>

	<PracticeExamUpdateModal :practice-exam="selectedPracticeExam" :active="updateModalActive" />

	<PracticeExamDeleteModal :practice-exam="selectedPracticeExam" :active="deleteModalActive" />
</template>
  
<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { usePracticeExamStore, type PracticeExamDto } from '../../stores/practice-exam.store';
  
import dayjs from 'dayjs';

import Button from '../base/button/Button.vue';
import Table from '../base/table/Table.vue';
import TableHead from '../base/table/TableHead.vue';
import TableItem from '../base/table/TableItem.vue';
import TableRow from '../base/table/TableRow.vue';
import PracticeExamDeleteModal from './PracticeExamDeleteModal.vue';
import PracticeExamUpdateModal from './PracticeExamUpdateModal.vue';

export default defineComponent({
  
	components: {
		Button,
	  	Table,
	  	TableHead,
	  	TableRow,
	  	TableItem,
		PracticeExamUpdateModal,
		PracticeExamDeleteModal,
	},
  
	data() {

	  	return {
			selectedPracticeExam: null,
			updateModalActive: 0,
			deleteModalActive: 0,
	 	};
	},
  
	computed: {

		...mapState(usePracticeExamStore, ['practiceExams']),

	},
  
	methods: {

		...mapActions(usePracticeExamStore, {
			updatePracticeExams: 'get',
		}),

		getPracticeExamDate(practice_exam: PracticeExamDto)
		{
			return dayjs(practice_exam.date).format('DD/MM/YYYY');
		},
  
		openUpdateModal(practiceExam: any) {
			this.selectedPracticeExam = practiceExam;
			this.updateModalActive++;
	  	},
  
	  	openDeleteModal(practiceExam: any) {
			this.selectedPracticeExam = practiceExam;
			this.deleteModalActive++;
	  	},

	},
  
	mounted() {
		if (this.practiceExams.length === 0)
			this.updatePracticeExams();
	},
  });
  
  </script>
  