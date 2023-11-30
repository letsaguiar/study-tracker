<template>
	<Modal title="deletar matéria" :active="modalActive" id="subject-delete-modal">
		<template #body>
			<span class="text-base font-bold">
				<strong>🚨 ATENÇÃO! 🚨</strong><br><br>
				Você está prestes a excluir uma matéria. Antes de prosseguir, por favor, leve em consideração os seguintes pontos:<br><br>
				🔍 Ao deletar esta matéria, todas as informações associadas a ela serão permanentemente removidas do sistema.<br><br>
				⚠️ Isso inclui quaisquer recursos, anotações ou dados relacionados a esta matéria.<br><br>
				🤔 Tem certeza de que deseja prosseguir com a exclusão? Recomendamos revisar cuidadosamente para garantir que não há informações importantes vinculadas a esta matéria.<br><br>
				📚 Lembre-se: Uma vez excluída, a matéria não poderá ser recuperada.<br><br>
			</span>
		</template>
		<template #footer>
			<div class="flex justify-end">
				<Button color="red" @click="submit">sim</Button>
				<LinkButton custom-class="text-gray-700" @click="close">não</LinkButton>
			</div>
		</template>
	</Modal>
</template>

<script>
import { mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import Button from '../base/button/Button.vue';
import LinkButton from '../base/button/LinkButton.vue';
import Modal from '../base/modal/Modal.vue';

export default {

	components: { Modal, Button, LinkButton },
	
	props: [ 'active', 'subject' ],

	data()
	{
		return { modalActive: 0 };
	},

	methods: {

		...mapActions(useSubjectStore, {
			deleteSubject: 'delete',
		}),

		async submit()
		{
			await this.deleteSubject(this.subject.id);
			this.modalActive = 0;
		},

		close()
		{
			this.modalActive++;
		}

	},

	watch: {

		active()
		{
			this.modalActive++;
		},
		
	}
	
}
</script>
