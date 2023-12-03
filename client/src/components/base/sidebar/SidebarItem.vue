<template>
	<RouterLink
	 :to="to"
	 :class="{ active: active }"
	 class="flex items-center rounded-lg p-4 text-gray-700 font-bold uppercase"
	>
		<i :class="icon"></i>
		<span class="ms-2 text-xs">{{ name }}</span>
	</RouterLink>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

export default {

	components: { RouterLink },

	props: [ 'to', 'name', 'icon' ],

	data()
	{
		return { route: useRoute() };
	},

	computed: {

		active()
		{
			return this.route.path === this.to;
		}

	}

}
</script>

<style scoped>

.active {
	@apply border;
	@apply bg-pink-700;
	@apply text-white !important;
}

</style>
