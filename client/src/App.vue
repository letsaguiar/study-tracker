<template>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-50">
		<RouterView />
	</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue';

export default {

	components: { RouterLink, Sidebar },

}
</script>