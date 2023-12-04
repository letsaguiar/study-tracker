<template>
	<Button color="pink" class="relative mb-5 border-2 border-white" @click="openCreateModal">nova matéria</Button>

	<Card title="Matérias">
		<SubjectTable />
	</Card>

	<SubjectCreateModal :active="createModalActive" />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/base/button/Button.vue';
import Card from '@/components/base/card/Card.vue';
import SubjectCreateModal from '../components/subject/SubjectCreateModal.vue';
import SubjectTable from '@/components/subject/SubjectTable.vue';

export default defineComponent({

	components: { Button, Card, SubjectCreateModal, SubjectTable },

	data() {
		return {
			createModalActive: 0,
		};
	},

	methods: {
		
		openCreateModal()
		{
			this.createModalActive++;
		}

	},

})

</script>
