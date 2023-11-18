<template>
	<Modal id="update-subject-modal" title="Update Subject" :hide_footer="true">
		<template v-slot:body>
			<SubjectForm :name="selectedName" @form-submitted="(data) => updateSubject(data)"/>
		</template>
	</Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import SubjectForm from './SubjectForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { onMounted, ref, watch } from 'vue';
import { SubjectService } from '../../http/SubjectService';

const emit = defineEmits(['update']);
const props = defineProps(['active', 'subject']);

let modal;
	
onMounted(() => {
	modal = new BsModal("#update-subject-modal");
})

watch(() => props.active, () => {
	modal.show();
});

const selectedName = ref(props.subject?.name)
watch(() => props.subject, () => {
	selectedName.value = props.subject?.name;
});

async function updateSubject(data)
{
	await new SubjectService().update(props.subject?.id, data);
	modal.hide();
	emit('update');
}
</script>