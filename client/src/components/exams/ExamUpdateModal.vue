<template>
	<Modal id="update-exam-modal" title="Editar Exame">
		<template v-slot:body>
			<ExamForm :exam="exam" @form-submitted="(data) => updateExam(data)" />
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import ExamForm from './ExamForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useExamStore } from '../../stores/exam.store';

export default {

	components: { Modal, ExamForm },

	props: [ 'active', 'exam' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#update-exam-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {

		...mapActions(useExamStore, {
			updateExamEntry: 'updateEntry',
		}),

		updateExam(data)
		{
			this.updateExamEntry(this.exam?.id, data);
			this.modal.hide();
		}

	}
		
}
</script>
