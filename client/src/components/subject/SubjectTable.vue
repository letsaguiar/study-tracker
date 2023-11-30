<template>
	<Table>
		<template #head>
			<TableRow>
				<TableHead>Nome</TableHead>
				<TableHead></TableHead>
			</TableRow>
		</template>

		<template #body>
			<TableRow v-for="subject in subjects">
				<TableItem>
					<div :class="{ 'ml-5': subject.parent }">
						<i class="fa-solid fa-caret-right fa-xl mr-3 text-blueGray-700"></i>
						<span>{{ subject.name }}</span>
					</div>
				</TableItem>
				<TableItem>
					<div class="flex justify-end">
						<Button color="pink" size="sm" custom-class="mr-3" @click="openUpdateModal(subject)">editar</Button>
						<Button color="red" size="sm">deletar</Button>
					</div>
				</TableItem>
			</TableRow>
		</template>
	</Table>

	<SubjectUpdateModal :subject="selectedSubject" :active="updateModalActive" />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import Button from '../base/button/Button.vue';
import Table from '../base/table/Table.vue';
import TableHead from '../base/table/TableHead.vue';
import TableItem from '../base/table/TableItem.vue';
import TableRow from '../base/table/TableRow.vue';
import SubjectUpdateModal from './SubjectUpdateModal.vue';

export default {

	components: { Button, Table, TableHead, TableItem, TableRow, SubjectUpdateModal },

	data()
	{
		return {
			selectedSubject: null,
			updateModalActive: 0
		};
	},

	computed: {

		...mapState(useSubjectStore, {
			subjects: 'subjectFlatTree',
		}),

	},

	methods: {

		...mapActions(useSubjectStore, {
			getSubjects: 'get',
		}),

		openUpdateModal(subject)
		{
			this.selectedSubject = subject;
			this.updateModalActive++;
		},

	},

	mounted()
	{
		if (this.subjects.length === 0)
			this.getSubjects();
	},

}

</script>