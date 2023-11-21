<template>
	<Modal id="delete-practice-test-modal" title="Deletar Exercícios">
		<template v-slot:body>
			<p class="fs-6 fw-bold">Você tem certeza que deseja deletar estes exercícios?</p>
		</template>
		<template v-slot:footer>
			<button class="btn btn-danger" @click="deletePracticeTest()">Sim</button>
			<button class="btn btn-link" data-bs-dismiss="modal">Não</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { usePracticeTestStore } from '../../stores/practice-test.store';

export default {

	components: { Modal },

	props: [ 'active', 'practiceTest' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#delete-practice-test-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		},

	},

	methods: {

		...mapActions(usePracticeTestStore, {
			deletePracticeTestEntry: 'deleteEntry',
		}),

		async deletePracticeTest()
		{
			await this.deletePracticeTestEntry(this.practiceTest?.id);
			this.modal.hide();
		}

	}

}

</script>
