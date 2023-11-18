<template>
	<Modal id="study-session-create-modal" title="Create Study Session" :hide_footer="true">
		<template v-slot:body>
			<StudySessionSubjectSelectionModal @subject-selected="(data) => onSubjectSelected(data)" v-if="currentContent === 0"/>
			<StudySessionTimerModal v-if="currentContent === 1" @timer-finished="(data) => onTimerFinished(data)" />
		</template>
	</Modal>
</template>

<script setup>
import { StudySessionService } from '../../http/StudySessionService';
import Modal from '../Modal.vue';
import StudySessionSubjectSelectionModal from './create-modal/StudySessionSubjectSelectionModal.vue';
import StudySessionTimerModal from './create-modal/StudySessionTimerModal.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, ref, watch } from 'vue';

const emit = defineEmits(['create']);
const props = defineProps(['active']);

let modal;
onMounted(() => {
	modal = new BsModal('#study-session-create-modal');
});
watch(() => props.active, () => {
	modal.show();
});

const currentContent = ref(0);

const subjectSelected = ref(null);
function onSubjectSelected(data)
{
	subjectSelected.value = data;
	currentContent.value++;
}

async function onTimerFinished(data)
{
	await new StudySessionService().create({ subject: { ...subjectSelected.value }, ...data });
	currentContent.value = 0;
	subjectSelected.value = null;
	modal.hide();
	emit('create');
}

</script>