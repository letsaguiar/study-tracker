<template>
	<button class="btn btn-success ms-3">New Practice Test</button>
	<table class="table align-items-center justify-content-center mb-0">
		<thead>
			<tr>
				<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Subject</th>
				<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
				<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hit Percentage</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="test in practice_tests">
				<td class="px-3">
					<span class="text-sm fw-bold">{{ test.subject.name }}</span>
				</td>
				<td class="px-3">
					<span class="text-sm fw-bold">{{ dayjs(test.date).format("DD-MM-YYYY") }}</span>
				</td>
				<td class="px-3">
					<span class="text-sm fw-bold">{{ getHitsPercentage(test) + "%" }}</span>
				</td>
				<td class="px-3">
					<div class="d-flex justify-content-end">
						<button class="btn btn-primary me-3">edit</button>
						<button class="btn btn-danger">delete</button>	
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const practice_tests = ref([
	{ subject: { name: 'Português' }, number_of_questions: 10, number_of_hits: 8, date: new Date() }
]);
function getHitsPercentage(practice_test)
{
	return (practice_test.number_of_hits / practice_test.number_of_questions) * 100;
}
</script>