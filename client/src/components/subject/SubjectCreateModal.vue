<template>
	<Modal id="subject-create-modal" title="nova matéria" :active="_active">
		<template #body>
			<SubjectForm @submit="(data) => createSubject(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import { defineComponent } from 'vue';
import Modal from '../base/modal/Modal.vue';
import SubjectForm from './SubjectForm.vue';

export default defineComponent({

	components: { Modal, SubjectForm },

	props: ['active'],

	data() {
		return { _active: 0 };
	},
	

	methods: {

		...mapActions(useSubjectStore, {
			_createSubject: 'create',
		}),

		async createSubject(data: any)
		{
			await this._createSubject(data);
			this._active = 0;
		}

	},

	watch: {
		
		active(value)
		{
			this._active = value; 
		}

	},

});

</script>
