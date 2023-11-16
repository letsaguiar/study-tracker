<template>
	<Modal id="update-subject-modal" title="Update Subject" :hide_footer="true">
		<template v-slot:body>
			<form role="form text-left">
				<div class="input-group input-group-outline my-3">
					<input v-model="subject_name" type="text" class="form-control" placeholder="Name">
				</div>
				<div class="row">
					<div class="col-9">
						<button type="button" class="btn bg-primary text-white w-100" @click="updateSubject()">Save</button>
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

const emit = defineEmits(['subject-updated']);
const props = defineProps(['active', 'subject']);

let modal;
	
onMounted(() => {
	modal = new BsModal("#update-subject-modal");
})

watch(() => props.active, () => {
	modal.show();
});

const subject_name = ref(props.subject?.name)
watch(() => props.subject, () => {
	subject_name.value = props.subject?.name;
});

async function updateSubject()
{
	await new SubjectService().update(props.subject?.id, { name: subject_name.value });
	subject_name.value = '';
	modal.hide();
	emit('subject-updated');
}
</script>