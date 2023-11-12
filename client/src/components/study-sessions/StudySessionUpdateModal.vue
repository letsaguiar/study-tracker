<template>
	<div class="modal fade" id="update-modal" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Update Study Session</h5>
				</div>
				<div class="modal-body">
					<form role="form text-left">
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
							<div class="col-6">
								<div class="input-group input-group-static my-3">
									<label>Init</label>
									<input
									 type="datetime-local" class="form-control"
									 v-model="selectedInit"
									>
								</div>
							</div>
							<div class="col-6">
								<div class="input-group input-group-static my-3">
									<label>End</label>
									<input
									 type="datetime-local" class="form-control"
									 v-model="selectedEnd"
									>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-success text-white" @click="updateStudySession()">Save</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { ref, onMounted, watch, computed, toRefs } from 'vue';
import dayjs from 'dayjs';

import { SubjectService } from '../../http/SubjectService';
import { StudySessionService } from '../../http/StudySessionService';

const emit = defineEmits(['update']);
const props = defineProps(['active', 'studySession']);

let modal;

onMounted(() => {
	modal = new Modal('#update-modal');
})

watch(() => props.active, () => {
	modal.show();
});

// Get Subjects
const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getMany();
}
getSubjects();

// Update Study Session
const selectedSubject = ref(props.studySession?.subject?.id);
const selectedInit = ref(props.studySession?.init);
const selectedEnd = ref(props.studySession?.end);

watch(() => props.studySession, () => {
	selectedSubject.value = props.studySession?.subject?.id;
	selectedInit.value = dayjs(props.studySession?.init).format('YYYY-MM-DDTHH:mm');
	selectedEnd.value = dayjs(props.studySession?.end).format('YYYY-MM-DDTHH:mm');
});

async function updateStudySession()
{
	await new StudySessionService().update(props.studySession.id, {
		subject: { id: selectedSubject.value },
		init: selectedInit.value,
		end: selectedEnd.value,
	});
	modal.hide();
	emit('update');
}

</script>