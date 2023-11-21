<template>
	<div class="container-flud py-4">
		<div class="row">
			<div class="col-12">
				<Card title="Sessões de Estudo">
					<StudySessionTable />
				</Card>
			</div>
		</div>
	</div>
</template>

<script setup>
import Card from '../components/Card.vue';
import StudySessionTable from '../components/study-sessions/StudySessionTable.vue'

import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>
