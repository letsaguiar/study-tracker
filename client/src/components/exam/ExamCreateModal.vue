<template>
	<Modal id="exam-create-modal" title="novo exame" :active="_active">
		<template #body>
			<ExamForm @submit="(data) => createExam(data)" />
		</template>
	</Modal>
</template>
  
<script lang="ts">
import { useExamStore, type ExamCreateDto } from '@/stores/exam.store';
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';

import Modal from '../base/modal/Modal.vue';
import ExamForm from './ExamForm.vue';
  
export default defineComponent({

	components: { Modal, ExamForm },

	props: ['active'],

	data() {
		return { _active: 0 };
	},

	methods: {
	
		...mapActions(useExamStore, {
			_createExam: 'create',
		}),

		async createExam(data: ExamCreateDto) {
			await this._createExam(data);
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
  