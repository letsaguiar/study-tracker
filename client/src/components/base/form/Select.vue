<template>
	<div class="mb-5">
		<label class="block mb-2 text-sm font-bold text-gray-800 uppercase">{{ label }}</label>
		<select
			class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
			:required="required"
			:value="value"
			@change="$emit('change', ($event.target as any).value)"
		>
			<option :value="null" selected>{{ placeholder }}</option>
			<option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.name }}</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface OptionProp
{
	name: string;
	value: string | number;
}

export default defineComponent({

	emits: ['change'],

	props: {
		label: String,
		placeholder: String,
		required: Boolean,
		value: String,
		options: {
			type: Array as PropType<OptionProp[]>,
			default: () => [],
		},
	},
});
</script>

