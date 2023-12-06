<template>
	<div class="mb-5">
		<label class="block mb-2 text-sm font-bold text-gray-800 uppercase">{{ label }}</label>
		<input
			class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
			:type="type"
			:placeholder="placeholder"
			:required="required"
			:value="modelValue"
			@input="$emit('update:modelValue', ($event.target as any).value)"
		>
	</div>
</template>

<script lang="ts">
import { defineComponent, type Prop } from 'vue';

export default defineComponent({

	emits: [ 'update:modelValue' ],

	props: {
		label: String,
		type: String,
		placeholder: String,
		required: Boolean,
		modelValue: String as Prop<string | number>,
	},

});
</script>
