<template>
	<Modal id="create-subject-modal" title="Create Subject" :hide_footer="true">
		<template v-slot:body>
			<form role="form text-left" @submit.prevent="createSubject()">
				<div class="input-group input-group-outline my-3">
					<input v-model="subjectToCreate" type="text" class="form-control" placeholder="Name">
				</div>
				<div class="row g-0">
					<div class="col-9">
						<button type="submit" class="btn bg-success text-white w-100">Save</button>
					</div>
					<div class="col-3">
						<button type="button" class="btn btn-link w-100" data-bs-dismiss="modal">Close</button>	
					</div>
				</div>
			</form>
		</template>
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, ref, watch } from 'vue';
import { SubjectService } from '../../http/SubjectService';

const emit = defineEmits(['subject-created']);
const props = defineProps(['active']);

let modal;

onMounted(() => {
	modal = new BsModal("#create-subject-modal");
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