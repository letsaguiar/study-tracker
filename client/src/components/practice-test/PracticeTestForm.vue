<template>
	<form @submit.prevent="submitForm()">
		<div class="row">
			<div class="col-12">
				<div class="input-group input-group-static mb-4">
					<label class="ms-0">Subject</label>
					<select class="form-control" v-model="selectedSubject">
						<option
						 v-for="subject in subjects"
						 :value="subject.id"
						>
							{{ subject.name }}
						</option>
					</select>
				</div>
			</div>
			<div class="col-12">
				<div class="input-group input-group-static mb-4">
					<label>Date</label>
      				<input type="date" class="form-control" v-model="selectedDate">
				</div>
			</div>
			<div class="col-6">
				<label>Number of Questions</label>
				<input type="number" class="form-control" v-model="selectedNoQ">
			</div>
			<div class="col-6">
				<label>Number of Hits</label>
				<input type="number" class="form-control" v-model="selectedNoH">
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-success mt-4 w-100">Create</button>
			</div>
		</div>
	</form>
</template>

<script setup>
import { ref, watch } from 'vue';
import { SubjectService } from '../../http/SubjectService';

const emits = defineEmits(['form-submitted'])
const props = defineProps(['subject', 'date', 'number_of_questions', 'number_of_hits']);

// Get Subjects
const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getMany();
}
getSubjects();

const selectedSubject = ref(null);
watch(() => props.subject, () => {
	selectedSubject.value = props.subject?.id;
});

const selectedDate = ref(null);
watch(() => props.date, () => {
	selectedDate.value = props.date;
});

const selectedNoQ = ref(null);
watch(() => props.number_of_questions, () => {
	selectedNoQ.value = props.number_of_questions;
});

const selectedNoH = ref(null);
watch(() => props.number_of_hits, () => {
	selectedNoH.value = props.number_of_hits;
});

function submitForm()
{
	emits('form-submitted', {
		subject: {
			id: selectedSubject.value
		},
		date: selectedDate.value,
		number_of_questions: selectedNoQ.value,
		number_of_hits: selectedNoH.value
	});
}
</script>