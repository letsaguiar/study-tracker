<template>
	<Modal id="create-exam-modal" title="Novo Exame">

	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';

export default {

	components: { Modal },

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
	
}
</script>
