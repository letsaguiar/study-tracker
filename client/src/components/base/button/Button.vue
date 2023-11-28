<template>
	<button
	 class="text-white font-bold uppercase rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
	 :class="[ bgColor, activeColor, sizeClass, customClass ]"
	 @click="$emit('click')"
	>
		<slot></slot>
	</button>
</template>

<script>

export default {

	props: [ 'color', 'size', 'customClass' ],

	emits: [ 'click' ],

	computed: {

		bgColor()
		{
			return `bg-${this.color}-500`;
		},

		activeColor()
		{
			return `bg-${this.color}-600`;
		},

		sizeClass()
		{
			const sizes = {
				sm: 'text-xs px-4 py-2 shadow hover:shadow-md',
				md: 'text-sm px-6 py-3 shadow hover:shadow-lg',
				lg: 'text-base px-8 py-3 shadow-md hover:shadow-lg',
			};

			return sizes[this.size] || sizes.md;
		},
		
	}

}

</script>