<template>
	<Modal id="practice-test-update-modal" title="Editar Teste de Prática" :active="_active">
		<template #body>
			<PracticeTestForm :practiceTest="practiceTest" @submit="(data) => updatePracticeTest(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { defineComponent } from 'vue';
import { usePracticeTestStore, type PracticeTestUpdateDto } from '../../stores/practice-test.store';
import Modal from '../base/modal/Modal.vue';
import PracticeTestForm from './PracticeTestForm.vue';

export default defineComponent({
	components: { Modal, PracticeTestForm },

	props: ['active', 'practiceTest'],

	data() {
		return { _active: 0 };
	},

	methods: {
		...mapActions(usePracticeTestStore, {
			_updatePracticeTest: 'update',
		}),

		async updatePracticeTest(data: PracticeTestUpdateDto) {
			await this._updatePracticeTest(this.practiceTest.id, data);
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
