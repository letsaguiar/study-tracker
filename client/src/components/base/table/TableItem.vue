<template>
	<td class="px-6 py-4" :class="customClass">
		<slot></slot>
	</td>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({

	props: [ 'class' ],

	computed: {

		customClass()
		{
			return this.class;
		}

	}

})

</script>
