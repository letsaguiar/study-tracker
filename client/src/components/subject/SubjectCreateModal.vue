<template>
	<Modal id="create-subject-modal" title="Create Subject">
		<template v-slot:body>
			<SubjectForm @form-submitted="(data) => createSubject(data)"/>
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>	
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import SubjectForm from './SubjectForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, watch } from 'vue';
import { SubjectService } from '../../http/SubjectService';

const emit = defineEmits(['create']);
const props = defineProps(['active']);

let modal;

onMounted(() => {
	modal = new BsModal("#create-subject-modal");
})

watch(() => props.active, () => {
	modal.show();
});

async function createSubject(data)
{
	await new SubjectService().create(data);
	modal.hide();
	emit('create');
}
</script>