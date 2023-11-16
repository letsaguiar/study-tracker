<template>
	<Modal id="delete-subject-modal" title="Delete Subject" :hide_footer="true">
		<template v-slot:body>
			<p class="fs-6 fw-bold">Are you sure you want to delete this subject?</p>
			<div class="row">
				<div class="col-9">
					<button type="button" class="btn bg-danger text-white w-100" @click="deleteSubject()">Yes</button>
				</div>
				<div class="col-3">
					<button type="button" class="btn btn-link w-100" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</template>
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, watch } from 'vue';
import { SubjectService } from '../../http/SubjectService';

const emit = defineEmits(['subject-deleted']);
const props = defineProps(['active', 'subject']);

let modal;

onMounted(() => {
	modal = new BsModal("#delete-subject-modal");
})

watch(() => props.active, () => {
	modal.show();
});

async function deleteSubject() {
	await new SubjectService().delete(props.subject?.id);
	modal.hide();
	emit('subject-deleted');
}
</script>