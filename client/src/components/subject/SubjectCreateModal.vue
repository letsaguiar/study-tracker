<template>
	<div class="modal fade" id="create-modal" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Create Subject</h5>
				</div>
				<div class="modal-body">
					<form role="form text-left">
						<div class="input-group input-group-outline my-3">
							<input v-model="subjectToCreate" type="text" class="form-control" placeholder="Name">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-success text-white" @click="createSubject()">Save</button>
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

const emit = defineEmits(['subject-created']);
const props = defineProps(['active']);

let modal;

onMounted(() => {
	modal = new Modal("#create-modal");
})

watch(() => props.active, () => {
	modal.show();
});

const subjectToCreate = ref('');
async function createSubject()
{
	await new SubjectService().create({ name: subjectToCreate.value });
	subjectToCreate.value = '';
	modal.hide();
	emit('subject-created');
}
</script>