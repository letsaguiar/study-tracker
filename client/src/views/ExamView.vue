<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
				<Card title="Exames">
					<ExamTable />
				</Card>
			</div>
		</div>
	</div>
</template>

<script>
import Card from '../components/Card.vue';
import ExamTable from '../components/exams/ExamTable.vue'
import { mapActions } from 'pinia';
import { usePathStore } from '../stores/path-store.js';

export default {
	components: { Card, ExamTable },

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
