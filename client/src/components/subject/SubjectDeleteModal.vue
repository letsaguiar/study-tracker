<template>
	<Modal id="delete-subject-modal" title="Delete Subject" :hide_footer="true">
		<template v-slot:body>
			<p class="fs-6 fw-bold">Are you sure you want to delete this subject?</p>
			<div class="row">
				<div class="col-9">
					<button type="button" class="btn bg-danger text-white w-100" @click="deleteSubject()">Yes</button>
				</div>
				<div class="col-3">
					<button type="button" class="btn btn-link w-100" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import { Modal as BsModal } from 'bootstrap';
import { mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';

export default {

	components: { Modal },

	props: [ 'active', 'subject' ],

	data()
	{
		return { modal: null };
	},

	mounted()
	{
		this.modal = new BsModal('#delete-subject-modal');
	},

	watch: {

		active()
		{
			this.modal.show();
		}

	},

	methods: {

		...mapActions(useSubjectStore, {
			deleteSubjectEntry: 'deleteEntry',
		}),

		async deleteSubject()
		{
			await this.deleteSubjectEntry(this.subject?.id);
			this.modal.hide();
		}

	}

}

</script>
