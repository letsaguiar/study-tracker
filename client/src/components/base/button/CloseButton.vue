<template>
	<button class="p-1 ml-auto bg-transparent border-0 float-right leading-none outline-none focus:outline-none" @click="$emit('click')">
		<i class="fa-solid fa-xmark fa-lg text-black"></i>
	</button>
</template>

<script>
export default {

	emits: [ 'click' ],

}
</script>