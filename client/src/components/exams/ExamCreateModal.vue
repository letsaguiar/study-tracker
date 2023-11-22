<template>
	<Modal id="create-exam-modal" title="Novo Exame">
		<template v-slot:body>
			<ExamForm @form-submitted="(data) => createExam(data)" />
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Fechar</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import ExamForm from './ExamForm.vue'
import { Modal as BsModal } from 'bootstrap';

export default {

	components: { Modal, ExamForm },

	props: [ 'active' ],

	data()
	{
		return { modal: null };
	},

	mounted() {
		this.modal = new BsModal('#create-exam-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {

		createExam(data)
		{
			console.log(data);
		}

	}
	
}
</script>
