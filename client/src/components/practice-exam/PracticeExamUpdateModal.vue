<template>
	<Modal id="practice-exam-update-modal" title="Editar Exame Prático" :active="_active">
		<template #body>
			<PracticeExamForm :practice-exam="practiceExam" @submit="(data) => updatePracticeExam(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';
import { usePracticeExamStore, type PracticeExamUpdateDto } from '../../stores/practice-exam.store';
import Modal from '../base/modal/Modal.vue';
import PracticeExamForm from './PracticeExamForm.vue';

export default defineComponent({
	components: { Modal, PracticeExamForm },

	props: ['active', 'practiceExam'],

	data() {
		return { _active: 0 };
	},

	methods: {
		...mapActions(usePracticeExamStore, {
			_updatePracticeExam: 'update',
		}),

		async updatePracticeExam(data: PracticeExamUpdateDto) {
			await this._updatePracticeExam(this.practiceExam.id, data);
			this._active = 0;
		},
	},

	watch: {
		active(value) {
			this._active = value;
		},
	},
});
</script>
