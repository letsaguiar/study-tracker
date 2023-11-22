<template>
	<Modal id="delete-exam-modal" title="Deletar Exame" :hide-footer="true">
		<template v-slot:body>
			<p class="fs-6 fw-bold">Você tem certeza que deseja deletar este exame?</p>
			<div class="row">
				<div class="col-9">
					<button type="button" class="btn bg-danger text-white w-100" @click="deleteExam()">Sim</button>
				</div>
				<div class="col-3">
					<button type="button" class="btn btn-link w-100" data-bs-dismiss="modal">Não</button>
				</div>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useExamStore } from '../../stores/exam.store';

export default {

	components: { Modal },

	props: [ 'active', 'exam' ],

	data()
	{
		return { modal: null };
	},

	methods: {

		...mapActions(useExamStore, {
			deleteExamEntry: 'deleteEntry',
		}),

		async deleteExam()
		{
			await this.deleteExamEntry(this.exam?.id);
			this.modal.hide();
		}

	},

	mounted()
	{
		this.modal = new BsModal('#delete-exam-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	}

}
</script>
