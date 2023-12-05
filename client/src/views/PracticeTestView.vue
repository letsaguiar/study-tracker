<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openCreateModal">novos exercícios</Button>
	<PracticeTestCreateModal :active="createModalActive" />

	<Card title="Sessões de Estudo">
		<PracticeTestTable />
	</Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Button from '../components/base/button/Button.vue';
import Card from '../components/base/card/Card.vue';
import PracticeTestCreateModal from '../components/practice-test/PracticeTestCreateModal.vue';
import PracticeTestTable from '../components/practice-test/PracticeTestTable.vue';

export default defineComponent({

	components: { Button, Card, PracticeTestCreateModal, PracticeTestTable },

	data()
	{
		return {
			createModalActive: 0
		};
	},

	methods: {

		openCreateModal() {
			this.createModalActive++;
		}

	}

});
</script>