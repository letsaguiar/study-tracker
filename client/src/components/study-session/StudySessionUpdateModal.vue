<template>
	<Modal id="study-session-update-modal" title="Editar Sessão de Estudo" :active="_active">
		<template #body>
			<StudySessionForm :studySession="studySession" @submit="(data) => updateStudySession(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { useStudySessionStore, type StudySessionUpdateDto } from '../../stores/study-session.store';
import { defineComponent } from 'vue';
import Modal from '../base/modal/Modal.vue';
import StudySessionForm from './StudySessionForm.vue';

export default defineComponent({
	components: { Modal, StudySessionForm },

	props: ['active', 'studySession'],

	data() {
		return { _active: 0 };
	},

	methods: {
		...mapActions(useStudySessionStore, {
			_updateStudySession: 'update',
		}),

		async updateStudySession(data: StudySessionUpdateDto) {
			await this._updateStudySession(this.studySession.id, data);
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

