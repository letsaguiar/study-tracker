<template>
	<Table>
	  <template #head>
		<TableHead>matéria</TableHead>
		<TableHead>data</TableHead>
		<TableHead>porcentagem de acertos</TableHead>
		<TableHead></TableHead>
	  </template>
  
	  <template #body>
		<TableRow v-for="test in practiceTests" :key="test.id">
		  <TableItem>
			<span class="font-bold">{{ test.subject.name }}</span>
		  </TableItem>
		  <TableItem>
			<span>{{ getTestDate(test) }}</span>
		  </TableItem>
		  <TableItem>
			<span>{{ test.hit_rate + '%' }}</span>
		  </TableItem>
		  <TableItem>
			<div class="flex justify-end">
			  <Button color="pink" size="xs" class="me-3" @click="openUpdateModal(test)">editar</Button>
			  <Button color="red" size="xs" @click="openDeleteModal(test)">deletar</Button>
			</div>
		  </TableItem>
		</TableRow>
	  </template>
	</Table>

	<PracticeTestUpdateModal :practiceTest="selectedTest" :active="updateModalActive" />

	<PracticeTestDeleteModal :practiceTest="selectedTest" :active="deleteModalActive" />
</template>
  
  <script lang="ts">
import dayjs from 'dayjs';

import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { usePracticeTestStore, type PracticeTestDto } from '../../stores/practice-test.store';
  
import Button from '../base/button/Button.vue';
import Table from '../base/table/Table.vue';
import TableHead from '../base/table/TableHead.vue';
import TableItem from '../base/table/TableItem.vue';
import TableRow from '../base/table/TableRow.vue';
import PracticeTestDeleteModal from './PracticeTestDeleteModal.vue';
import PracticeTestUpdateModal from './PracticeTestUpdateModal.vue';
  
export default defineComponent({
  
	components: {
	  Button,
	  Table,
	  TableHead,
	  TableRow,
	  TableItem,
	  PracticeTestUpdateModal,
	  PracticeTestDeleteModal,
	},
  
	data() {
	  return {
		selectedTest: null,
		updateModalActive: 0,
		deleteModalActive: 0,
	  };
	},
  
	computed: {
	  ...mapState(usePracticeTestStore, ['practiceTests']),
	},
  
	methods: {

		...mapActions(usePracticeTestStore, {
			updatePracticeTest: 'get',
		}),

		getTestDate(test: PracticeTestDto)
		{
			return dayjs(test.date).format('DD/MM/YYYY');
		},
  
		openUpdateModal(test: any) {
			this.selectedTest = test;
			this.updateModalActive++;
		},
  
		openDeleteModal(test: any) {
			this.selectedTest = test;
			this.deleteModalActive++;
		},
	},
  
	mounted() {
		if (!this.practiceTests.length)
			this.updatePracticeTest();
	},

});
  
</script>
  