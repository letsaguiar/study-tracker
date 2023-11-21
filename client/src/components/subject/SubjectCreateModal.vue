<template>
	<Modal id="create-subject-modal" title="Create Subject">
		<template v-slot:body>
			<SubjectForm @form-submited="(data) => createSubject(data)"/>
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import SubjectForm from './SubjectForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';

export default {
	components: { Modal, SubjectForm },

	props: [ 'active' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#create-subject-modal');
	},

	watch: {
		
		active()
		{
			this.modal.show();
		}

	},

	methods: {

		...mapActions(useSubjectStore, {
			createSubjectEntry: 'createEntry'
		}),

		async createSubject(data)
		{
			await this.createSubjectEntry(data);
			this.modal.hide();
		}

	},
}
</script>
