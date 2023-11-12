<template>
	<div class="modal fade" id="delete-modal" tabindex="-1" data-bs-autohide="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Delete Study Session</h5>
				</div>
				<div class="modal-body">
					<p>Are you sure you want to delete this study session?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-gradient-danger text-white" @click="deleteStudySession()">Yes</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { onMounted, watch } from 'vue';

import { StudySessionService } from '../../http/StudySessionService';

const emit = defineEmits(['delete']);
const props = defineProps(['active', 'studySession']);

let modal;

onMounted(() => {
	modal = new Modal("#delete-modal");
})

watch(() => props.active, () => {
	modal.show();
});

async function deleteStudySession() {
	await new StudySessionService().delete(props.studySession?.id);
	modal.hide();
	emit('delete');
}
</script>