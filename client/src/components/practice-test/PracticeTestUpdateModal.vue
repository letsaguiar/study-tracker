<template>
	<Modal id="update-practice-test-modal" title="Update Practice Test">
		<template v-slot:body>
			<PracticeTestForm
			 :subject="practiceTest?.subject"
			 :date="practiceTest?.date"
			 :number_of_questions="practiceTest?.number_of_questions"
			 :number_of_hits="practiceTest?.number_of_hits"
			 @form-submitted="(data) => updatePracticeTest(data)"/>
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

const emits = defineEmits(['update']);
const props = defineProps(['active', 'practiceTest']);

let modal;

onMounted(() => {
	modal = new BsModal('#update-practice-test-modal');
})

watch(() => props.active, () => {
	modal.show();
});

async function updatePracticeTest(data)
{
	await new PracticeTestService().update(props.practiceTest?.id ,data);
	modal.hide();
	emits('update');
}

</script>