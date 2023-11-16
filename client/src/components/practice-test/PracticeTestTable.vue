<template>
	<button class="btn btn-success ms-3">New Practice Test</button>

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
					<button class="btn btn-primary me-3">edit</button>
					<button class="btn btn-danger">delete</button>	
				</div>
			</td>
		</tr>
	</Table>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import Table from '../Table.vue';

const practice_tests = ref([
	{ subject: { name: 'Português' }, number_of_questions: 10, number_of_hits: 8, date: new Date() }
]);
function getHitsPercentage(practice_test)
{
	return (practice_test.number_of_hits / practice_test.number_of_questions) * 100;
}
</script>