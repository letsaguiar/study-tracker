<template>
	<button :type="type || 'button'" class="font-bold rounded uppercase" :class="[ colorClasses, sizeClasses, customClass ]" @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

type TypeProp = 'button' | 'submit' | 'reset' | undefined
type ColorProp = 'white' | 'blue' | 'dark' | 'green'  | 'red' | 'yellow' | 'purple' | 'pink';
type SizeProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default defineComponent({

	emits: [ 'click' ],

	props: {
		type: String as PropType<TypeProp>,
		color: String as PropType<ColorProp>,
		size: String as PropType<SizeProp>,
		class: String,
	},
	
	computed: {

		colorClasses()
		{
			const colorArr = [
				`bg-${this.color}-700`,
				`hover:bg-${this.color}-800`,
			];

			this.color === 'white'
				? colorArr.push(`text-gray-700`)
				: colorArr.push(`text-white`);

			return colorArr.join(' ');
		},

		sizeClasses()
		{
			const sizeMap = {
				xs: `px-3 py-2 text-xs`,
				sm: `px-3 py-2 text-sm`,
				md: `px-5 py-2.5 text-sm`,
				lg: `px-5 py-3 text-base`,
				xl: `px-6 py-3.5 text-base`,
			};

			if (this.size)
				return sizeMap[this.size];

			return sizeMap.md;
		},

		customClass()
		{
			return this.class;
		}

	}

});
</script>
