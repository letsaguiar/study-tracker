<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openCreateModal">novos exercícios</Button>
	<PracticeTestCreateModal :active="createModalActive" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/base/button/Button.vue';
import PracticeTestCreateModal from '../components/practice-test/PracticeTestCreateModal.vue';

export default defineComponent({

	components: { Button, PracticeTestCreateModal },

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