<template>
	<div class="mb-5">
		<label class="block mb-2 text-sm font-bold text-gray-800 uppercase">{{ label }}</label>
		<input
			:type="type"
			class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
			:placeholder="placeholder"
			:required="required"
			:value="value"
			@change="$emit('change', $event.target.value)"
		>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

	emits: [ 'change' ],

	props: {
		label: String,
		type: String,
		placeholder: String,
		required: Boolean,
		value: String,
	},

});
</script>
