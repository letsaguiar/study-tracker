<template>
	<nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl">
		<div class="container-fluid py-1 px-3">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
					<li v-for="path in paths" class="breadcrumb-item text-sm">
						<span>{{ path }}</span>
					</li>
				</ol>
				<h6 class="font-weight-bolder mb-0">Dashboard</h6>
			</nav>
		</div>
	</nav>
</template>

<script setup>
import { computed } from 'vue';
import { usePathStore } from '../stores/path-store';
import { storeToRefs } from 'pinia';

const pathStore = usePathStore();
const { path } = storeToRefs(pathStore);

const paths = computed(() => {
	const result = [ 'Dashboard' ];

	path.value.split('/').forEach((path) => {
		if (path.length > 0)
			result.push(path[0].toUpperCase() + path.slice(1));
	});

	return (result);
});
</script>