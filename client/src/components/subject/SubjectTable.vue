<template>
	<button  class="btn btn-success ms-4" @click="openCreateModal()">New Subject</button>
	<Table :headers="['name', '']">
		<tr v-for="subject in subjects">
			<td class="px-4" :class="{ 'child': subject.parent }">
				<i class="fa-solid fa-circle-chevron-right me-3 text-dark"></i>
				<span class="text-sm fw-bold">{{ subject.name }}</span>
			</td>

			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3">edit</button>
					<button class="btn btn-danger">delete</button>	
				</div>
			</td>
		</tr>
	</Table>

	<SubjectCreateModal :active="createModalActive" />

</template>

<script>
import Table from '../Table.vue';
import SubjectCreateModal from './SubjectCreateModal.vue';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store.js';

export default {

	components: { Table, SubjectCreateModal },

	data()
	{
		return { 
			createModalActive: 0,
		};
	},

	computed: {

		...mapState(useSubjectStore, {
			subjectEntries: 'entries',
			subjects: 'orderByRelationship'
		}),

	},

	methods: {
		
		...mapActions(useSubjectStore, {
			updateSubjectEntries: 'updateEntries'
		}),

		openCreateModal()
		{
			this.createModalActive++;
		}

	},

	beforeMount()
	{
		if (this.subjectEntries.length === 0)
			this.updateSubjectEntries();
	}

}
</script>

<style>

.child
{
	padding-left: 3rem !important;
}

</style>
