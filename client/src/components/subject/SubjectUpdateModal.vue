<template>
	<Modal id="subject-update-modal" title="Editar Matéria" :active="_active">
		<template #body>
			<SubjectForm :subject="subject" @submit="(data) => updateSubject(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { useSubjectStore, type SubjectUpdateDto } from '../../stores/subject.store';
import { defineComponent } from 'vue';
import Modal from '../base/modal/Modal.vue';
import SubjectForm from './SubjectForm.vue';

export default defineComponent({
	
	components: { Modal, SubjectForm },

	props: ['active', 'subject'],

	data() {
		return { _active: 0 };
	},

	methods: {

		...mapActions(useSubjectStore, {
			_updateSubject: 'update',
		}),

		async updateSubject(data: SubjectUpdateDto) {
			await this._updateSubject(this.subject.id, data);
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

