<template>
	<Sidebar>
		<template #header>
			<RouterLink to="/" class="flex items-center uppercase text-pink-700 px-3 py-7">
				<span class="font-thin">study</span>
				<span class="font-bold">tracker</span>
			</RouterLink>
		</template>
		<template #body>
			<SidebarItem to="/" icon="fa-solid fa-gauge" name="dashboard" />
			<SidebarItem to="/subjects" icon="fa-solid fa-bookmark" name="matérias" />
			<SidebarItem to="/study-sessions" icon="fa-solid fa-clock" name="sessões de estudo" />
			<SidebarItem to="/exams" icon="fa-solid fa-rectangle-list" name="exames" />
			<SidebarItem to="/statistics" icon="fa-solid fa-chart-simple" name="estatísticas" />
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
