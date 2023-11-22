<template>
	<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start my-3 ms-3 bg-gradient-dark">
		<SidebarHeader to="/" icon="fa-solid fa-graduation-cap fa-2xl" title="Study Tracker" />
		<div class="w-auto">
			<ul class="navbar-nav">
				<SidebarItem to="/" icon="fa-solid fa-gauge fa-xl" title="Dashboard" />
				<SidebarItem to="/subjects" icon="fa-solid fa-bookmark fa-xl" title="Matérias" />
				<SidebarItem to="/study-sessions" icon="fa-solid fa-clock fa-xl" title="Sessões de Estudo" />
				<SidebarItem to="/practice-tests" icon="fa-solid fa-square-check fa-xl" title="Exercícios" />
				<SidebarItem to="/exams" icon="fa-solid fa-list-check fa-xl" title="Exames" />
				<SidebarItem to="/statics" icon="fa-solid fa-chart-simple fa-xl" title="Estatísticas" />
			</ul>
		</div>
		<div class="sidenav-footer position-absolute w-100 bottom-0 ">
			<div class="mx-3">
				<button class="btn bg-gradient-primary w-100" href="#" type="button">Timer</button>
			</div>
		</div>
	</aside>
</template>

<script setup>
import SidebarHeader from './SidebarHeader.vue';
import SidebarItem from './SidebarItem.vue';
</script>
