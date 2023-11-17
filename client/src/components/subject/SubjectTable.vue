<template>
	<button class="btn btn-success ms-3" @click="openCreateModal">New Subject</button>
	<Table :headers="['name', '']">
		<tr v-for="subject in subjects">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ subject.name }}</span>
			</td>
			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(subject)">edit</button>
					<button class="btn btn-danger" @click="openDeleteModal(subject)">delete</button>	
				</div>
			</td>
		</tr>
	</Table>

	<SubjectCreateModal :active="createModalActive" @create="getSubjects()"/>

	<SubjectDeleteModal :active="deleteModalActive" :subject="subjectToDelete" @subject-deleted="getSubjects()"/>

	<SubjectUpdateModal :active="updateModalActive" :subject="subjectToUpdate" @subject-updated="getSubjects()"/>

</template>

<script setup>
import Table from '../Table.vue';
import SubjectDeleteModal from './SubjectDeleteModal.vue';
import SubjectCreateModal from './SubjectCreateModal.vue';
import SubjectUpdateModal from './SubjectUpdateModal.vue';

import { SubjectService } from '../../http/SubjectService';
import { ref } from 'vue';

// Get Subjects
const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getMany();
}
getSubjects();

// Create Modal
const createModalActive = ref(1);
function openCreateModal()
{
	createModalActive.value++;
}

// Delete Modal
const deleteModalActive = ref(1);
const subjectToDelete = ref('');
function openDeleteModal(subject)
{
	subjectToDelete.value = subject;
	deleteModalActive.value++;
}

// Update Modal
const updateModalActive = ref(1);
const subjectToUpdate = ref('');
function openUpdateModal(subject)
{
	subjectToUpdate.value = subject;
	updateModalActive.value++;
}
</script>