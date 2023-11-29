<template>
	<Modal title="nova matéria" :active="active">
		<template #body>
			foo
		</template>

		<template #footer>
			foo
		</template>
	</Modal>
</template>

<script>
import Modal from '../base/modal/Modal.vue';

export default {

	components: { Modal },

	props: [ 'active' ],

}
</script>