<template>
	<Sidebar />

	<div class="ml-64 min-h-screen bg-gray-50">
		<Navbar />
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
