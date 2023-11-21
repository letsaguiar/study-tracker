<template>
	<Modal id="update-subject-modal" title="Update Subject">
		<template v-slot:body>
			<SubjectForm :subject="subject" @form-submited="(data) => updateSubject(data)"/>
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

	props: [ 'active', 'subject' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#update-subject-modal');
	},

	watch: {
		
		active()
		{
			this.modal.show();
		},

	},

	methods: {
		
		...mapActions(useSubjectStore, {
			updateSubjectEntry: 'updateEntry',
		}),

		updateSubject(data)
		{
			this.updateSubjectEntry(this.subject?.id, data);
			this.modal.hide();
		},

	},


}
</script>
