<template>
	<Modal id="study-session-update-modal" title="Update Study Session">
		<template v-slot:body>
			<StudySessionForm :studySession="studySession" @form-submitted="(data) => updateStudySession(data)" />
		</template>
		<template v-slot:footer>
			<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import StudySessionForm from './StudySessionForm.vue';
import { Modal as BsModal} from 'bootstrap';
import { onMounted, watch } from 'vue';
import { StudySessionService } from '../../http/StudySessionService';

const emit = defineEmits(['update']);
const props = defineProps(['active', 'studySession']);

let modal;

onMounted(() => {
	modal = new BsModal('#study-session-update-modal');
})

watch(() => props.active, () => {
	modal.show();
});

async function updateStudySession(data)
{
	await new StudySessionService().update(props.studySession.id, data);
	modal.hide();
	emit('update');
}

</script>