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
									<select class="form-control">
										<option
										 v-for="subject in subjects"
										 :value="subject.id"
										 :selected="getDefaultSubject(subject)"
										>
											{{ subject.name }}
										</option>
									</select>
								</div>
							</div>
							<div class="col-6">
								<div class="input-group input-group-static my-3">
									<label>Init</label>
									<input type="datetime-local" class="form-control" :value="getDefaultDate(studySession?.init)">
								</div>
							</div>
							<div class="col-6">
								<div class="input-group input-group-static my-3">
									<label>End</label>
									<input type="datetime-local" class="form-control" :value="getDefaultDate(studySession?.end)">
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-success text-white">Save</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { ref, onMounted, watch, toRefs } from 'vue';
import dayjs from 'dayjs';

import { SubjectService } from '../../http/SubjectService';

const props = defineProps(['active', 'studySession']);

let modal;

onMounted(() => {
	modal = new Modal('#update-modal');
})

watch(() => props.active, () => {
	modal.show();
});

// Form Defaults
function getDefaultDate(date)
{
	return (dayjs(date).format('YYYY-MM-DDThh:mm'));
}

function getDefaultSubject(subject)
{
	if (!subject)
		return (false);
	return subject.id === props.studySession?.subject?.id;
}

// Get Subjects
const subjects = ref([]);
async function getSubjects()
{
	subjects.value = await new SubjectService().getMany();
}
getSubjects();

</script>