<template>
	<Modal id="create-study-session-modal" title="Nova Sessão de Estudos">
		<template v-slot:body>
			<StudySessionForm @form-submitted="(data) => createStudySession(data)"/>
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Fechar</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import StudySessionForm from './StudySessionForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useStudySessionStore } from '../../stores/study-session.store.js'


export default {

	props: [ 'active' ],
	
	components: { Modal, StudySessionForm },

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#create-study-session-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {
		
		...mapActions(useStudySessionStore, {
			createStudySessionEntry: 'createEntry',
		}),

		createStudySession(data)
		{
			this.createStudySessionEntry(data);
			this.modal.hide();
		},

	},

}

</script>
