<template>
	<li class="items-center">
		<RouterLink :to="path" :class="{active: active}" class="text-xs uppercase font-bold block text-blueGray-700 hover:text-blueGray-500 p-4 my-1 rounded-lg">
			<i class="fa-xl mr-2 opacity-75" :class="icon"></i>
			<span>{{ title }}</span>
		</RouterLink>
	</li>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {

	components: { RouterLink },

	props: ['path', 'title', 'icon', 'active'],

}

</script>

<style scoped>

.active {
	background-color: theme('colors.pink.500');
	color: theme('colors.white');
}

</style>