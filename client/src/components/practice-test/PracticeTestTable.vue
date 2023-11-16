<template>
	<button class="btn btn-success ms-3" @click="openCreateModal()">New Practice Test</button>

	<Table :headers="['subject', 'date', 'hit percentage', '']" >
		<tr v-for="test in practice_tests">
			<td class="px-4">
				<span class="text-sm fw-bold">{{ test.subject.name }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ dayjs(test.date).format("DD-MM-YYYY") }}</span>
			</td>
			<td class="px-4">
				<span class="text-sm fw-bold">{{ getHitsPercentage(test) + "%" }}</span>
			</td>
			<td class="px-4">
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary me-3" @click="openUpdateModal(test)">edit</button>
					<button class="btn btn-danger">delete</button>	
				</div>
			</td>
		</tr>
	</Table>

	<PracticeTestCreateModal :active="createModalActive" @create="getPracticeTests()"/>

	<PracticeTestUpdateModal :active="updateModalActive" :practice-test="selectedPracticeTest" @update="getPracticeTests()"/>

</template>

<script setup>
import Table from '../Table.vue';
import PracticeTestCreateModal from './PracticeTestCreateModal.vue';
import PracticeTestUpdateModal from './PracticeTestUpdateModal.vue';
import { ref } from 'vue';
import dayjs from 'dayjs';
import { PracticeTestService } from '../../http/PracticeTestService';

// Get Practice Tests
const practice_tests = ref([]);
async function getPracticeTests()
{
	practice_tests.value = await new PracticeTestService().getMany();
}
getPracticeTests();
function getHitsPercentage(practice_test)
{
	return (practice_test.number_of_hits / practice_test.number_of_questions) * 100;
}

// Open Create Modal
const createModalActive = ref(1);
function openCreateModal()
{
	createModalActive.value++;
}

// Open Update Modal
const updateModalActive = ref(1);
const selectedPracticeTest = ref(null);
function openUpdateModal(practice_test)
{
	selectedPracticeTest.value = practice_test;
	updateModalActive.value++;
}
</script>