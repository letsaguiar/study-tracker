<template>
	<Modal id="exam-update-modal" title="Editar Exame" :active="_active">
		<template #body>
			<ExamForm :exam="exam" @submit="(data) => updateExam(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';
import { useExamStore, type ExamUpdateDto } from '../../stores/exam.store';

import Modal from '../base/modal/Modal.vue';
import ExamForm from './ExamForm.vue';

export default defineComponent({

	components: { Modal, ExamForm },

	props: ['active', 'exam'],

	data() {
		return { _active: 0 };
	},

	methods: {
		...mapActions(useExamStore, {
			_updateExam: 'update',
		}),

		async updateExam(data: ExamUpdateDto) {
			await this._updateExam(this.exam.id, data);
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
