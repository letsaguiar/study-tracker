<template>
	<Modal id="update-practice-test-modal" title="Editar Exercícios">
		<template v-slot:body>
			<PracticeTestForm :practice-test="practiceTest" @form-submitted="(data) => updatePracticeTest(data)" />
		</template>
		<template v-slot:footer>
			<button class="btn btn-link" data-bs-dismiss="modal">Close</button>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import PracticeTestForm from './PracticeTestForm.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { usePracticeTestStore } from '../../stores/practice-test.store';

export default {

	components: { Modal, PracticeTestForm },

	props: [ 'active', 'practiceTest' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#update-practice-test-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {
		
		...mapActions(usePracticeTestStore, {
			updatePracticeTestEntry: 'updateEntry',
		}),

		async updatePracticeTest(data)
		{
			await this.updatePracticeTestEntry(this.practiceTest?.id, data);
			this.modal.hide();
		}

	},

}

</script>
