<template>
	<Modal id="practice-test-create-modal" title="novo simulado" :active="_active">
		<template #body>
			<PracticeTestForm @submit="(data) => createPracticeTest(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { usePracticeTestStore, type PracticeTestCreateDto } from '../../stores/practice-test.store';

import Modal from '../base/modal/Modal.vue';
import PracticeTestForm from './PracticeTestForm.vue';

export default defineComponent({

	components: { Modal, PracticeTestForm },

	props: [ 'active' ],

	data() {
		return { _active: 0 };
	},

	methods: {
		
		...mapActions(usePracticeTestStore, {
			_createPracticeTest: 'create',
		}),

		async createPracticeTest(data: PracticeTestCreateDto)
		{
			await this._createPracticeTest(data);
			this._active = 0;
		}

	},

	watch: {

		active(value)
		{
			this._active = value;
		}

	}

});
</script>