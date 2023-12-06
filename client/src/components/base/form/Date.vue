<template>
	<div class="mb-5">
		<label class="block mb-2 text-sm font-medium text-gray-900">
			<span class="uppercase font-bold">{{ label }}</span>
		</label>
		<div class="relative">
			<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none z-10">
				<i class="fa-solid fa-calendar text-gray-500"></i>
			</div>
		<date-picker
			v-model="value"
			class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-pink-500 focus:border-pink-500 block w-full ps-9 p-2.5"
			:input-format="'dd/MM/yyyy'"
		/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DatePicker from 'vue3-datepicker';

export default defineComponent({
	
	components: { DatePicker },

	emits: [ 'update:modelValue' ],

	props: {
		label: String,
		modelValue: String,
	},

	computed: {

		value: {
			get() {
				return new Date(this.modelValue || '');
			},
			set(value: Date) {
				this.$emit('update:modelValue', value.toISOString());
			}
		}

	},

});
</script>
