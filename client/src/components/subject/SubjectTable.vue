<template>
	<Table>
		<template #head>
			<TableHead>nome</TableHead>
			<TableHead></TableHead>
		</template>

		<template #body>
			<TableRow v-for="subject in subjects">
				<TableItem>
					<div :class="{ ['ms-5']: subject.parent }">
						<i class="fa-solid fa-caret-right me-2"></i>
						<span class="font-bold">{{ subject.name }}</span>
					</div>
				</TableItem>
				<TableItem>
					<div class="flex justify-end">
						<Button color="pink" size="xs" class="me-3" @click="openUpdateModal(subject)">editar</Button>
						<Button color="red" size="xs" @click="openDeleteModal(subject)">deletar</Button>
					</div>
				</TableItem>
			</TableRow>
		</template>
	</Table>

	<SubjectUpdateModal :subject="selectedSubject" :active="updateModalActive" />

	<SubjectDeleteModal :subject="selectedSubject" :active="deleteModalActive" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import Button from '../base/button/Button.vue';
import Table from '../base/table/Table.vue';
import TableHead from '../base/table/TableHead.vue';
import TableRow from '../base/table/TableRow.vue';
import TableItem from '../base/table/TableItem.vue';
import SubjectUpdateModal from './SubjectUpdateModal.vue';
import SubjectDeleteModal from './SubjectDeleteModal.vue';

export default defineComponent({
	
	components: { Button, Table, TableHead, TableRow, TableItem, SubjectUpdateModal, SubjectDeleteModal },

	data() {
		return {
			selectedSubject: null,
			updateModalActive: 0,
			deleteModalActive: 0,
		};
	},

	computed: {
		
		...mapState(useSubjectStore, {
			subjects: 'subjectFlatTree',
		}),

	},

	methods: {
		
		...mapActions(useSubjectStore, {
			updateSubjects: 'get',
		}),

		openUpdateModal(subject: any)
		{
			this.selectedSubject = subject;
			this.updateModalActive++;
		},

		openDeleteModal(subject: any)
		{
			this.selectedSubject = subject;
			this.deleteModalActive++;
		}

	},

	mounted()
	{
		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});

</script>
