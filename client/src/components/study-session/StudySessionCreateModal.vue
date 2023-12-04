<template>
	<Modal id="study-session-create-modal" title="nova sessão de estudos" :active="_active">

	</Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from '../base/modal/Modal.vue';

export default defineComponent({

	components: { Modal },

	props: [ 'active' ],

	data() {
		return { _active: 0 };
	},

	watch: {

		active(value)
		{
			this._active = value;
		}

	}

});

</script>
