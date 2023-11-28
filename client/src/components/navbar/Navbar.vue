<template>
	<Navbar>
		<template #left>
			<RouterLink to="/" class="text-white text-sm uppercase hidden lg:inline-block font-semibold">
				{{ route.name }}
			</RouterLink>
		</template>
	</Navbar>
</template>

<script>
import { RouterLink, useRoute } from 'vue-router';
import Navbar from '../base/navbar/Navbar.vue';

export default {

	components: { Navbar, RouterLink, RouterLink },

	data()
	{
		return { route: useRoute() }
	},

}

</script>