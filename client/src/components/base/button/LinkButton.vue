<template>
	<button
	 class="background-transparent font-bold uppercase outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
	 :class="[ textColor, sizeClass, customClass ]"
	 @click="$emit('click')"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {

	emits: [ 'click' ],

	props: [ 'color', 'size', 'customClass' ],

	computed: {

		textColor()
		{
			return `text-${this.color}-500`;
		},

		sizeClass()
		{
			const sizes = {
				sm: 'text-xs px-4 py-2',
				md: 'text-sm px-6 py-3',
				lg: 'text-base px-8 py-3',
			};

			return sizes[this.size] || sizes.md;
		},

	}

}
</script>