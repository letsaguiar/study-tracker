<template>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-50">
		<Navbar />

		<div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
			<RouterView />
		</div>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Navbar from './components/navbar/Navbar.vue';
import Sidebar from './components/sidebar/Sidebar.vue';

export default {

	components: { RouterLink, Sidebar, Navbar },

}
</script>