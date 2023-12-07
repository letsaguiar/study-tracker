<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openCreateModal">novo exame</Button>
	<ExamCreateModal :active="createModalActive" />

	<Card title="Exames">
		<ExamTable />
	</Card>

	<Button color="pink" class="relative my-5" @click="openCreateModal">novo simulado</Button>
	<Card title="Simulados"
	
	></Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Button from '../components/base/button/Button.vue';
import Card from '../components/base/card/Card.vue';
import ExamCreateModal from '../components/exam/ExamCreateModal.vue';
import ExamTable from '../components/exam/ExamTable.vue';

export default defineComponent({

	components: { Button, Card, ExamCreateModal, ExamTable },

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