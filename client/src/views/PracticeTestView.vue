<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
				<Card title="Exercícios">
					<PracticeTestTable />
				</Card>
			</div>
		</div>
	</div>
</template>

<script setup>
import Card from '../components/Card.vue';
import PracticeTestTable from '../components/practice-test/PracticeTestTable.vue';

import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>
