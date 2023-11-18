<template>
	<Modal id="study-session-delete-modal" title="Delete Study Session">
		<template v-slot:body>
			<p>Are you sure you want to delete this study session?</p>
		</template>
		<template v-slot:footer>
			<button type="button" class="btn bg-gradient-danger text-white" @click="deleteStudySession()">Yes</button>
			<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import { Modal as BsModal} from 'bootstrap';
import { onMounted, watch } from 'vue';

import { StudySessionService } from '../../http/StudySessionService';

const emit = defineEmits(['delete']);
const props = defineProps(['active', 'studySession']);

let modal;

onMounted(() => {
	modal = new BsModal("#study-session-delete-modal");
})

watch(() => props.active, () => {
	modal.show();
});

async function deleteStudySession() {
	await new StudySessionService().delete(props.studySession?.id);
	modal.hide();
	emit('delete');
}
</script>