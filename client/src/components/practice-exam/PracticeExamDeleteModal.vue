<template>
	<Modal id="practice-exam-delete-modal" title="Excluir Exame Prático" :active="_active">
	  <template #body>
		<div>
		  <p>
			<strong>Atenção:</strong> Você está prestes a excluir este exame prático. Esta ação pode ter efeitos em cascata, excluindo outros recursos relacionados. Tem certeza de que deseja continuar?
		  </p>
		  <p>
			<em>Esta ação não pode ser desfeita.</em>
		  </p>
		</div>
	  </template>
	  <template #footer>
		<div class="flex justify-end w-full">
		  <Button color="red" @click="confirmDelete">Confirmar Exclusão</Button>
		  <Button color="white" class="text-black" @click="cancelDelete">Cancelar</Button>
		</div>
	  </template>
	</Modal>
  </template>
  
  <script lang="ts">
  import { mapActions } from 'pinia';
  import { usePracticeExamStore } from '../../stores/practice-exam.store';
  import { defineComponent } from 'vue';
  import Button from '../base/button/Button.vue';
  import Modal from '../base/modal/Modal.vue';
  
  export default defineComponent({
	components: { Button, Modal },
	props: ['active', 'practiceExam'],
	data() {
	  return {
		_active: 0,
	  };
	},
	methods: {
	  ...mapActions(usePracticeExamStore, {
		deletePracticeExam: 'delete',
	  }),
	  async confirmDelete() {
		await this.deletePracticeExam(this.practiceExam?.id);
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
  