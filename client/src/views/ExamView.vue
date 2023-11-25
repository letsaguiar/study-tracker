<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
				<Card title="Exames">
					<ExamTable />
				</Card>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<Card title="Simulados">
					<PracticeExamTable />
				</Card>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'pinia';
import Card from '../components/Card.vue';
import ExamTable from '../components/exams/ExamTable.vue';
import PracticeExamTable from '../components/practice-exam/PracticeExamTable.vue';
import { usePathStore } from '../stores/path-store.js';

export default {
	components: { Card, ExamTable, PracticeExamTable, PracticeExamTable },

	methods: {
		...mapActions(usePathStore, {
			updatePath: 'update',
		}),
	},

	mounted() {
		this.updatePath();
	},
}
</script>
