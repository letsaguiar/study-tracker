<template>
	<Sidebar>
		<template #header>
			<RouterLink to="/" class="md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
				<i class="fa-solid fa-graduation-cap fa-2xl"></i>
				<span>Study Tracker</span>
			</RouterLink>
		</template>

		<template #body>
			<SidebarItemGroup>
				<SidebarItem
				 path="/"
				 title="dashboard"
				 icon="fa-solid fa-gauge"
				 :active="isActive('/')"
				/>

				<SidebarItem
				 path="/subjects"
				 title="materias"
				 icon="fa-solid fa-bookmark"
				 :active="isActive('/subjects')"
				/>

				<SidebarItem
				 path="/study-sessions"
				 title="sessões de estudo"
				 icon="fa-solid fa-clock"
				 :active="isActive('/study-sessions')"
				/>
				
				<SidebarItem
				 path="/exams"
				 title="Exames"
				 icon="fa-solid fa-list-check"
				 :active="isActive('/exams')"
				/>
				
				<SidebarItem
				 path="/statiscs"
				 title="estatísticas"
				 icon="fa-solid fa-chart-simple"
				 :active="isActive('/statiscs')"
				/>
			</SidebarItemGroup>
		</template>
	</Sidebar>
</template>

<script>
import { RouterLink, useRoute } from 'vue-router';
import Sidebar from '../base/sidebar/Sidebar.vue';
import SidebarItem from '../base/sidebar/SidebarItem.vue';
import SidebarItemGroup from '../base/sidebar/SidebarItemGroup.vue';

export default {

	components: { Sidebar, SidebarItem, SidebarItemGroup, RouterLink },

	data() {
		return { route: useRoute() };
	},

	methods: {
		isActive(path) {
			return this.route.path === path;
		}
	}

}

</script>