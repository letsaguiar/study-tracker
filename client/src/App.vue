<template>
	<Sidebar />

	<div class="ml-64 pt-32 pb-32 relative bg-pink-600">
		<Navbar />
	</div>
	<div class="ml-64 px-10 mx-auto -m-24">
		<div class="p-4">
			<RouterView />
		</div>
	</div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue';
import Navbar from './components/base/navbar/Navbar.vue';

export default {

	components: { RouterView, Sidebar, Navbar }

}
</script>
