<template>
	<button class="btn btn-success ms-3" @click="openCreateModal()">Novos Exercícios</button>

	<Table :headers="['matéria', 'data', 'percentual de acerto', '']" >
		<tr v-for="test in practiceTests">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ test.subject.name }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatDate(test.date) }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ formatPercentage(test.hit_rate) }}</span>
			</td>
			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(test)">editar</button>
					<button class="btn btn-danger" @click="openDeleteModal(test)">deletar</button>	
				</div>
			</td>
		</tr>
	</Table>

	<PracticeTestCreateModal :active="createModalActive" />

	<PracticeTestUpdateModal :active="updateModalActive" :practice-test="selectedPracticeTest" />
	
	<PracticeTestDeleteModal :active="deleteModalActive" :practice-test="selectedPracticeTest" />

</template>

<script>
import Table from '../Table.vue';
import PracticeTestCreateModal from './PracticeTestCreateModal.vue';
import PracticeTestUpdateModal from './PracticeTestUpdateModal.vue';
import PracticeTestDeleteModal from './PracticeTestDeleteModal.vue';
import { mapState, mapActions } from 'pinia';
import { usePracticeTestStore } from '../../stores/practice-test.store.js';
import dayjs from 'dayjs';

export default {

	components: { Table, PracticeTestCreateModal, PracticeTestUpdateModal, PracticeTestDeleteModal },

	data()
	{
		return {
			selectedPracticeTest: null,
			createModalActive: 0,
			updateModalActive: 0,
			deleteModalActive: 0,
		};
	},

	computed: {

		...mapState(usePracticeTestStore, {
			practiceTests: 'entries',
		}),

	},

	methods: {

		...mapActions(usePracticeTestStore, {
			updatePracticeTests: 'updateEntries',
		}),

		formatDate(date)
		{
			return dayjs(date).format("DD-MM-YYYY");
		},

		formatPercentage(percentage)
		{
			return `${percentage}%`;
		},

		openCreateModal()
		{
			this.createModalActive++;
		},

		openUpdateModal(test)
		{
			this.selectedPracticeTest = test;
			this.updateModalActive++;
		},

		openDeleteModal(test)
		{
			this.selectedPracticeTest = test;
			this.deleteModalActive++;
		}

	},

	beforeMount()
	{
		if (this.practiceTests.length === 0)
			this.updatePracticeTests();
	}

}
</script>
