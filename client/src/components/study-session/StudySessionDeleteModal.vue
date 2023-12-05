<template>
	<Modal id="study-session-delete-modal" title="Excluir Sessão de Estudo" :active="_active">
	  <template #body>
		<div>
		  <p>
			<strong>Atenção:</strong> Você está prestes a excluir esta sessão de estudo. Esta ação pode ter efeitos em cascata, excluindo outros recursos relacionados. Tem certeza de que deseja continuar?
		  </p>
		  <p>
			<br>
			<em>Obs: Esta ação não pode ser desfeita.</em>
		  </p>
		</div>
	  </template>
	  <template #footer>
		<div class="flex justify-end w-full">
		  <Button color="red" @click="confirmDelete">Confirmar Exclusão</Button>
		  <Button color="white" @click="cancelDelete">Cancelar</Button>
		</div>
	  </template>
	</Modal>
</template>
  
<script lang="ts">
import { mapActions } from 'pinia';
import { useStudySessionStore } from '../../stores/study-session.store';
import { defineComponent } from 'vue';
import Button from '../base/button/Button.vue';
import Modal from '../base/modal/Modal.vue';
  
export default defineComponent({

	components: { Button, Modal },

	props: ['active', 'studySession'],

	data() {
	  return {
		_active: 0,
	  };
	},

	methods: {

		...mapActions(useStudySessionStore, {
			deleteStudySession: 'delete',
		}),

		async confirmDelete() {
			await this.deleteStudySession(this.studySession?.id);
			this._active = 0;
		},

		cancelDelete() {
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
  