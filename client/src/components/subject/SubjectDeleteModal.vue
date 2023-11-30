<template>
	<Modal title="deletar matéria" :active="modalActive" id="subject-delete-modal">
		<template #body>
			<span class="text-base font-bold">Você tem certeza que deseja deletar esta matéria?</span>
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
			this.modalActive++;
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