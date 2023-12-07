<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openExamCreateModal">novo exame</Button>
	<ExamCreateModal :active="createExamModalActive" />

	<Card title="Exames">
		<ExamTable />
	</Card>

	<Button color="pink" class="relative my-5" @click="openPracticeExamCreateModal">novo simulado</Button>
	<PracticeExamCreateModal :active="createPracticeExamModalActive" />

	<Card title="Simulados">
		<PracticeExamTable />	
	</Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Button from '../components/base/button/Button.vue';
import Card from '../components/base/card/Card.vue';
import ExamCreateModal from '../components/exam/ExamCreateModal.vue';
import ExamTable from '../components/exam/ExamTable.vue';
import PracticeExamCreateModal from '../components/practice-exam/PracticeExamCreateModal.vue';
import PracticeExamTable from '../components/practice-exam/PracticeExamTable.vue';

export default defineComponent({

	components: { Button, Card, ExamCreateModal, ExamTable, PracticeExamCreateModal, PracticeExamTable },

	data()
	{
		return {
			createExamModalActive: 0,
			createPracticeExamModalActive: 0,
		};
	},

	methods: {

		openExamCreateModal() {
			this.createExamModalActive++;
		},

		openPracticeExamCreateModal() {
			this.createPracticeExamModalActive++;
		},

	}

});
</script>