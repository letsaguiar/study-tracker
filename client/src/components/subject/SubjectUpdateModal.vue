<template>
	<div class="modal fade" id="update-modal" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Update Subject</h5>
				</div>
				<div class="modal-body">
					<form role="form text-left">
						<div class="input-group input-group-outline my-3">
							<input v-model="subjectToUpdate" type="text" class="form-control" placeholder="Name">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-success text-white" @click="updateSubject()">Save</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { onMounted, ref, watch } from 'vue';
import { SubjectService } from '../../http/SubjectService';

const emit = defineEmits(['subject-updated']);
const props = defineProps(['active', 'subjectToUpdate']);

let modal;

onMounted(() => {
	modal = new Modal("#update-modal");
})

watch(() => props.active, () => {
	modal.show();
});

const subjectToUpdate = ref('');
async function updateSubject()
{
	await new SubjectService().update(props.subjectToUpdate, { name: subjectToUpdate.value });
	subjectToUpdate.value = '';
	modal.hide();
	emit('subject-updated');
}
</script>