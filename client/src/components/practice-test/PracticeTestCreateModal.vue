<template>
	<Modal id="create-practice-test-modal" title="Create Practice Test">
		<template v-slot:body>
			<PracticeTestForm @form-submitted="(data) => createPracticeTest(data)"/>
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>
	</Modal>
</template>

<script setup>
import { PracticeTestService } from '../../http/PracticeTestService';
import Modal from '../Modal.vue';
import PracticeTestForm from './PracticeTestForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, watch } from 'vue';

const emits = defineEmits(['create']);
const props = defineProps(['active']);

let modal;

onMounted(() => {
	modal = new BsModal('#create-practice-test-modal');
})

watch(() => props.active, () => {
	modal.show();
});

async function createPracticeTest(data)
{
	await new PracticeTestService().create(data);
	modal.hide();
	emits('create');
}

</script>