<template>
	<button class="btn btn-success ms-4" @click="openCreateModal()">Novo Exame</button>

	<ExamCreateModal :active="createModalActive" />
</template>

<script>
import ExamCreateModal from './ExamCreateModal.vue';
import { mapState, mapActions } from 'pinia';
import { useExamStore } from '../../stores/exam.store';

export default {

	components: { ExamCreateModal },

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
