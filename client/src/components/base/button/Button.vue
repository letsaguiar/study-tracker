<template>
	<button :type="type || 'button'" class="text-white font-bold rounded uppercase" :class="[ colorClasses, sizeClasses, customClass ]" @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

type ColorProp = 'blue' | 'dark' | 'green'  | 'red' | 'yellow' | 'purple';
type SizeProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default defineComponent({

	emits: [ 'click' ],

	props: {
		tyoe: String,
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
				`focus:ring-4`,
				`focus:ring-${this.color}-300`,

			];

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

			return sizeMap[this.size] || sizeMap.md;
		},

		customClass()
		{
			return this.class;
		}

	}

});
</script>
