<template>
	<Transition>
		<form @submit.prevent="next()">
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
				<div class="col-9">
					<button type="submit" class="btn bg-success text-white w-100">Next</button>
				</div>
				<div class="col-3">
					<button type="button" class="btn btn-link w-100" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</form>
	</Transition>
</template>

<script setup>
import { ref } from 'vue';
import { SubjectService } from '../../../http/SubjectService';

const emit = defineEmits(['subject-selected']);

const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getMany();
}
getSubjects();

const selectedSubject = ref(null);
function next() {
	if (selectedSubject.value)
		emit('subject-selected', { id: selectedSubject.value });
}
</script>