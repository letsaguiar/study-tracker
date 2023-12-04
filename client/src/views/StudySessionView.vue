<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openCreateModal">nova sessão de estudos</Button>
	<StudySessionCreateModal :active="createModalActive" />

	<Card title="Sessões de Estudo">
		<StudySessionTable />
	</Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/base/button/Button.vue';
import Card from '@/components/base/card/Card.vue';
import StudySessionCreateModal from '@/components/study-session/StudySessionCreateModal.vue';
import StudySessionTable from '@/components/study-session/StudySessionTable.vue';

export default defineComponent({
	
	components: { Button, Card, StudySessionCreateModal, StudySessionTable },

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
