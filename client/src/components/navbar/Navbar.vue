<template>
	<Navbar></Navbar>
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