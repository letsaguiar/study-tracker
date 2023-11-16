<template>
	<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start my-3 ms-3 bg-gradient-dark">
		<SidebarHeader to="/" icon="fa-solid fa-graduation-cap fa-2xl" title="Study Tracker" />
		<div class="w-auto">
			<ul class="navbar-nav">
				<SidebarItem to="/" icon="fa-solid fa-gauge fa-xl" title="Dashboard" />
				<SidebarItem to="/subjects" icon="fa-solid fa-bookmark fa-xl" title="Subjects" />
				<SidebarItem to="/study-sessions" icon="fa-solid fa-clock fa-xl" title="Study Sessions" />
				<SidebarItem to="/practice-tests" icon="fa-solid fa-square-check fa-xl" title="Practice Tests" />
			</ul>
		</div>
	</aside>
</template>

<script setup>
import SidebarHeader from './SidebarHeader.vue';
import SidebarItem from './SidebarItem.vue';
</script>