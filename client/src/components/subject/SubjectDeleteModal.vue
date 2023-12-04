<template>
	<Modal id="subject-delete-modal" title="Excluir Matéria" :active="_active">
		<template #body>
			<div>
				<p>
					<strong>Atenção:</strong> Você está prestes a excluir esta matéria. Esta ação pode ter
				efeitos em cascata, excluindo outros recursos relacionados. Tem certeza de que deseja continuar?
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
import { useSubjectStore } from '../../stores/subject.store';
import { defineComponent } from 'vue';
import Button from '../base/button/Button.vue';
import Modal from '../base/modal/Modal.vue';

export default defineComponent({

	components: { Button, Modal },

	props: ['active', 'subject'],
	
	data() {
		return { _active: 0 };
	},

	methods: {

		...mapActions(useSubjectStore, {
			_deleteSubject: 'delete',
		}),

		async confirmDelete() {
			await this._deleteSubject(this.subject?.id);
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

