<template>
	<button class="btn btn-success ms-3" @click="openCreateModal">New Subject</button>
	<table class="table align-items-center justify-content-center mb-0">
		<thead>
			<tr>
				<th id="subject-name" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 w-80">Name</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="subject in subjects">
				<td class="px-3">
					<span class="text-sm fw-bold">{{ subject.name }}</span>
				</td>
				<td class="px-3">
					<div class="d-flex justify-content-end">
						<button class="btn btn-primary me-3" @click="openUpdateModal(subject.id)">edit</button>
						<button class="btn btn-danger" @click="openDeleteModal(subject.id)">delete</button>	
					</div>
				</td>
			</tr>
		</tbody>
	</table>

	<SubjectCreateModal :active="createModalActive" @subject-created="getSubjects()"/>

	<SubjectDeleteModal :active="deleteModalActive" :subject-to-delete="subjectToDelete" @subject-deleted="getSubjects()"/>

	<SubjectUpdateModal :active="updateModalActive" :subject-to-update="subjectToUpdate" @subject-updated="getSubjects()"/>

</template>

<script setup>
import { ref } from 'vue';
import SubjectDeleteModal from './SubjectDeleteModal.vue';
import SubjectCreateModal from './SubjectCreateModal.vue';
import SubjectUpdateModal from './SubjectUpdateModal.vue';
import { SubjectService } from '../../http/SubjectService';

// Get Subjects
const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getAll();
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
function openDeleteModal(id)
{
	subjectToDelete.value = id;
	deleteModalActive.value++;
}

// Update Modal
const updateModalActive = ref(false);
const subjectToUpdate = ref('');
function openUpdateModal(id)
{
	subjectToUpdate.value = id;
	updateModalActive.value++;
}
</script>