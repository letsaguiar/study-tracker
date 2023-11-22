<template>
	<button class="btn btn-success ms-4" @click="openCreateModal()">Novo Exame</button>

	<ExamCreateModal :active="createModalActive" />
</template>

<script>
import ExamCreateModal from './ExamCreateModal.vue';

export default {

	components: { ExamCreateModal },

	data() {
		return {
			createModalActive: 0,
		}
	},

	methods: {
		
		openCreateModal()
		{
			this.createModalActive++;
		}

	},

}
</script>
