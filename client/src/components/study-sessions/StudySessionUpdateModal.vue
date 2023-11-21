<template>
	<Modal id="update-study-session-modal" title="Update Study Session">
		<template v-slot:body>
			<StudySessionForm :studySession="studySession" @form-submitted="(data) => updateStudySession(data)" />
		</template>
		<template v-slot:footer>
			<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import StudySessionForm from './StudySessionForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useStudySessionStore } from '../../stores/study-session.store';

export default {

	components: { Modal, StudySessionForm },

	props: ['active', 'studySession'],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#update-study-session-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {

		...mapActions(useStudySessionStore, {
			updateStudySessionEntry: 'updateEntry',
		}),
		
		updateStudySession(data)
		{
			this.updateStudySessionEntry(this.studySession?.id, data);
			this.modal.hide();
		}

	},

}

</script>
