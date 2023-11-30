<template>
	<Modal title="nova matéria" :active="modalActive" id="subject-create-modal">
		<template #body>
			<SubjectForm @submit="(data) => submit(data)"/>
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

	props: [ 'active' ],

	data()
	{
		return { modalActive: 0 };
	},

	methods: {

		...mapActions(useSubjectStore, {
			createSubject: 'create',
		}),

		async submit(subject)
		{
			await this.createSubject(subject);
			this.modalActive++;
		}

	},

	watch: {

		active()
		{
			this.modalActive++;
		},
		
	}

}
</script>