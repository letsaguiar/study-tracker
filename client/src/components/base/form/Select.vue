<template>
	<div class="mb-5">
		<label class="block mb-2 text-sm font-bold text-gray-800 uppercase">{{ label }}</label>
		<select
			class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			:required="required"
			:value="value"
			@change="$emit('change', $event.target.value)"
		>
			<option :value="null" disabled selected>{{ placeholder }}</option>
			<option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.name }}</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

	emits: ['change'],

	props: {
		label: String,
		placeholder: String,
		required: Boolean,
		value: String,
		options: {
			type: Array,
			default: () => [],
		},
	},
});
</script>

