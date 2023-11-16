<template>
	<div class="container-flud py-4">
		<div class="row">
			<div class="col-12">
				<Card title="Subjects">
					<SubjectTable />
				</Card>
			</div>
		</div>
	</div>
</template>

<script setup>
import { usePathStore } from '../stores/path-store';

import Card from '../components/Card.vue';
import SubjectTable from '../components/subject/SubjectTable.vue';

// Update path store
const pathStore = usePathStore();
pathStore.update();
</script>