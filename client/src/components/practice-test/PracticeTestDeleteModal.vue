<template>
	<Modal id="delete-practice-test-modal" title="Delete Practice Test">
		<template v-slot:body>
			<p class="fs-6 fw-bold">Are you sure you want to delete this practice test?</p>
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Close</button>
			<button class="btn btn-danger" @click="deletePracticeTest()">Delete</button>
		</template>
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, watch } from 'vue';
import { PracticeTestService } from '../../http/PracticeTestService';

const emits = defineEmits(['delete']);
const props = defineProps(['active', 'practiceTest']);

let modal;

onMounted(() => {
	modal = new BsModal('#delete-practice-test-modal');
})

watch(() => props.active, () => {
	modal.show();
});

async function deletePracticeTest()
{
	await new PracticeTestService().delete(props.practiceTest?.id);
	modal.hide();
	emits('delete');
}

</script>