<template>
	<Modal id="create-practice-test-modal" title="Create Practice Test">
		<template v-slot:body>
			<PracticeTestForm @form-submitted="(data) => createPracticeTest(data)"/>
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

	props: [ 'active' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#create-practice-test-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {
		
		...mapActions(usePracticeTestStore, {
			createPracticeTestEntry: 'createEntry',
		}),

		createPracticeTest(data)
		{
			this.createPracticeTestEntry(data);
			this.modal.hide();
		}

	}

}

</script>
