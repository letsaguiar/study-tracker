<template>
	<form role="form" @submit.prevent="submitForm()">
		<div class="row">
			<div class="col-12">
				<div class="input-group input-group-static mb-4">
					<label class="ms-0">Subject</label>
					<select class="form-control" v-model="selectedSubject">
						<option v-for="subject in subjects" :value="subject.id">
							{{ subject.name }}
						</option>
					</select>
				</div>
			</div>
			<div class="col-6">
				<div class="input-group input-group-static my-3">
					<label>Init</label>
					<input type="datetime-local" class="form-control" v-model="selectedInit">
				</div>
			</div>
			<div class="col-6">
				<div class="input-group input-group-static my-3">
					<label>End</label>
					<input type="datetime-local" class="form-control" v-model="selectedEnd">
				</div>
			</div>
			<div class="col-12">
				<button type="submit" class="btn bg-success text-white w-100">Save</button>
			</div>
		</div>
	</form>
</template>

<script setup>
import { SubjectService } from '../../http/SubjectService';
import { ref, watch } from 'vue';
import dayjs from 'dayjs';

const emit = defineEmits(['form-submitted']);
const props = defineProps(['studySession']);

const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getMany();
}
getSubjects();

const selectedSubject = ref(null);
const selectedInit = ref(null);
const selectedEnd = ref(null);

watch(() => props.studySession, (studySession) => {
	selectedSubject.value = studySession.subject.id;
	selectedInit.value = dayjs(studySession.init).format('YYYY-MM-DDTHH:mm');
	selectedEnd.value = dayjs(studySession.end).format('YYYY-MM-DDTHH:mm');
});

function submitForm()
{
	emit('form-submitted', {
		subject: {
			id: selectedSubject.value,
		},
		init: selectedInit.value,
		end: selectedEnd.value,
	});
}

</script>