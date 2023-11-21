<template>
	<Modal id="delete-study-session-modal" title="Deletar Sessão de Estudos">
		<template v-slot:body>
			<p>Você tem certeza que deseja deletar esta sessão de estudos?</p>
		</template>
		<template v-slot:footer>
			<button type="button" class="btn bg-gradient-danger text-white" @click="deleteStudySession()">Sim</button>
			<button type="button" class="btn btn-link" data-bs-dismiss="modal">Não</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useStudySessionStore } from '../../stores/study-session.store';

export default {

	components: { Modal },

	props: [ 'active', 'studySession' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#delete-study-session-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {

		...mapActions(useStudySessionStore, {
			deleteStudySessionEntry: 'deleteEntry',
		}),

		deleteStudySession()
		{
			this.deleteStudySessionEntry(this.studySession?.id);
			this.modal.hide();
		}

	}

}

</script>
