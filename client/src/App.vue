<template>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-50">
		<Navbar />

		<div class="relative bg-pink-600 md:pt-32 pb-32 pt-12"></div>
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<div class="flex flex-wrap mt-4">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/navbar/Navbar.vue';
import Sidebar from './components/sidebar/Sidebar.vue';

export default {

	components: { RouterLink, Sidebar, Navbar, RouterView },

}
</script>