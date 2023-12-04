<template>
	<Modal id="study-session-create-modal" title="nova sessão de estudos" :active="_active">
		<template #body>
			<StudySessionForm @submit="(data) => createStudySession(data)" />
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useStudySessionStore, type StudySessionCreateDto } from '@/stores/study-session.store';
import Modal from '../base/modal/Modal.vue';
import StudySessionForm from './StudySessionForm.vue';

export default defineComponent({

	components: { Modal, StudySessionForm },

	props: [ 'active' ],

	data() {
		return { _active: 0 };
	},

	methods: {
		
		...mapActions(useStudySessionStore, {
			_createStudySession: 'create',
		}),

		async createStudySession(data: StudySessionCreateDto)
		{
			await this._createStudySession(data);
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
