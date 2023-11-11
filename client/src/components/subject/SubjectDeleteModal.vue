<template>
	<div class="modal fade" id="delete-modal" tabindex="-1" data-bs-autohide="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Delete Subject</h5>
				</div>
				<div class="modal-body">
					<p>Are you sure you want to delete this subject?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-gradient-danger text-white" @click="deleteSubject()">Yes</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { SubjectService } from '../../http/SubjectService';
import { onMounted, watch } from 'vue';

const emit = defineEmits(['subject-deleted']);
const props = defineProps(['active', 'subjectToDelete']);

let modal;

onMounted(() => {
	modal = new Modal("#delete-modal");
})

watch(() => props.active, () => {
	modal.show();
});

async function deleteSubject() {
	await new SubjectService().delete(props.subjectToDelete);
	modal.hide();
	emit('subject-deleted');
}
</script>