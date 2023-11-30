<template>
	<Modal title="editar matéria" :active="modalActive">
		<template #body>
			<SubjectForm :subject="subject" @submit="(data) => submit(data)"/>
		</template>
	</Modal>
</template>

<script>
import { mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import Modal from '../base/modal/Modal.vue';
import SubjectForm from './SubjectForm.vue';

export default {

	components: { Modal, SubjectForm },

	props: [ 'active', 'subject' ],

	data()
	{
		return { modalActive: 0 };
	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubject: 'update',
		}),

		async submit(subject)
		{
			await this.updateSubject(this.subject.id, subject);
			this.modalActive++;
		}

	},

	watch: {

		active()
		{
			this.modalActive++;
		},

	},

}
</script>