<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openCreateModal">nova sessão de estudos</Button>
	<StudySessionCreateModal :active="createModalActive" />

	<Card title="Sessões de Estudo"></Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/base/button/Button.vue';
import Card from '@/components/base/card/Card.vue';
import StudySessionCreateModal from '@/components/study-session/StudySessionCreateModal.vue';

export default defineComponent({
	
	components: { Button, Card, StudySessionCreateModal },

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
