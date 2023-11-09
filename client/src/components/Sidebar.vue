<template>
	<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start my-3 ms-3 bg-gradient-dark">
		<div class="sidenav-header">
			<RouterLink to="/" class="navbar-brand m-0 text-white text-center">
				<i class="fa-solid fa-graduation-cap fa-2xl"></i>
				<span class="ms-1 fs-6 fw-bold">Study Tracker</span>
			</RouterLink>
		</div>
		<hr class="horizontal light mt-0">
		<div class="w-auto">
			<ul class="navbar-nav">
				<li class="nav-item">
					<RouterLink class="nav-link text-white" to="/" :class="{ 'bg-gradient-primary': isCurrentPath('/'), active: isCurrentPath('/')}">
						<div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-gauge fa-xl"></i>
						</div>
						<span class="nav-link-text ms-1">Dashboard</span>
					</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink class="nav-link text-white" to="/subjects" :class="{ 'bg-gradient-primary': isCurrentPath('/subjects'), active: isCurrentPath('/subjects')}">
						<div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa-solid fa-bookmark fa-xl"></i>
						</div>
						<span class="nav-link-text ms-1">Subjects</span>
					</RouterLink>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { usePathStore } from '../stores/path-store';
import { storeToRefs } from 'pinia'

const pathStore = usePathStore();
const { path } = storeToRefs(pathStore);

function isCurrentPath(toPath)
{
	return toPath === path.value
}
</script>