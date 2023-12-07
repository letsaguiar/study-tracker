<template>
	<Modal id="practice-exam-create-modal" title="create new practice exam" :active="_active">
		<template #body>
			<PracticeExamForm @submit="(data) => createPracticeExam(data)" />
		</template>
	</Modal>
</template>
  
<script lang="ts">
import { usePracticeExamStore, type PracticeExamCreateDto } from '@/stores/practice-exam.store';
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';

import Modal from '../base/modal/Modal.vue';
import PracticeExamForm from './PracticeExamForm.vue';
  
export default defineComponent({
	
	components: { Modal, PracticeExamForm },
	
	props: ['active'],
	
	data() {
		return { _active: 0 };
	},
	
	methods: {
		...mapActions(usePracticeExamStore, {
			_createPracticeExam: 'create',
		}),
	  
		async createPracticeExam(data: PracticeExamCreateDto) {
			await this._createPracticeExam(data);
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
  