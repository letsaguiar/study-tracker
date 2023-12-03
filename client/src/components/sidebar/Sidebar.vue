<template>
	<Sidebar>
		<template #header>
			<RouterLink to="/" class="flex items-center justify-center uppercase text-pink-500 p-5">
				<span class="font-bold">Study Tracker</span>
			</RouterLink>
		</template>
	</Sidebar>
</template>
import type { RouterLink } from 'vue-router';

<script lang="ts">
import { RouterLink } from 'vue-router';
import Sidebar from '../base/sidebar/Sidebar.vue';
import SidebarItem from '../base/sidebar/SidebarItem.vue';

export default {

	components: { RouterLink, Sidebar, SidebarItem }

}
</script>
