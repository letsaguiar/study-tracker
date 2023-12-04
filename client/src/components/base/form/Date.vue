<template>
	<label class="block mb-2 text-sm font-medium text-gray-900">
		<span class="uppercase font-bold">{{ label }}</span>
	</label>
	<date-picker
		v-model="_value"
		class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
		:placeholder="placeholder"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DatePicker from 'vue3-datepicker'

export default defineComponent({
	
	components: { DatePicker },

	props: {
		label: String,
		placeholder: String,
		value: String,
	},

	data()
	{
		return { _value: new Date() };
	},

	watch: {

		value(value)
		{
			if (value)
				this._value = value;
		}

	}
});
</script>
