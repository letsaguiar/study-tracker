<template>
	<Button color="amber" size="md" custom-class="relative mb-5" @click="openCreateModal()">nova matéria</Button>

	<Card title="Matérias">
		<SubjectTable />
	</Card>

	<SubjectCreateModal :active="createModalActive" />
</template>

<script>
import Button from '../components/base/button/Button.vue';
import Card from '../components/base/card/Card.vue';
import SubjectCreateModal from '../components/subject/SubjectCreateModal.vue';
import SubjectTable from '../components/subject/SubjectTable.vue';

export default {

	components: { Card, SubjectTable, Button, SubjectCreateModal },

	data()
	{
		return { createModalActive: 0 };
	},

	methods: {

		openCreateModal()
		{
			this.createModalActive++;
		}

	}

}
</script>