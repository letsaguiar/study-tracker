<template>
	<div class="sidenav-header">
		<RouterLink :to="props.to" class="navbar-brand m-0 text-white text-center">
			<i :class="props.icon"></i>
			<span class="ms-1 fs-6 fw-bold">{{ props.title }}</span>
		</RouterLink>
	</div>
	<hr class="horizontal light mt-0">
</template>

<script setup>
const props = defineProps(['to', 'icon', 'title'])
</script>