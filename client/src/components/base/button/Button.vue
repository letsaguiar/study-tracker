<template>
	<button
	 :type="type || 'button'"
	 class="text-white font-bold uppercase rounded focus:outline-none"
	 :class="[ ...colorClass, ...sizeClass, customClass ]"
	 @click="$emit('click')"
	>
		<slot></slot>
	</button>	
</template>

<script>

export default {

	props: [ 'type', 'color', 'size', 'customClass' ],

	emits: [ 'click' ],

	computed: {

		colorClass()
		{
			return [
				`bg-${this.color}-500`,
				`hover:bg-${this.color}-600`,
				`active:bg-${this.color}-600`,
			]
		},

		sizeClass()
		{
			const sizes = {
				sm: [ 'text-xs', 'px-4', 'py-2' ],
				md: [ 'text-sm', 'px-6', 'py-3' ],
				lg: [ 'text-base', 'px-8', 'py-3' ],
			};

			return sizes[this.size] || sizes.md;
		},
		
	}

}

</script>
