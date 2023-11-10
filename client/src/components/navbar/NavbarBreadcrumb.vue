<template>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
			<li v-for="path in pathArray" class="breadcrumb-item text-sm">
				<span>{{ path }}</span>
			</li>
		</ol>
		<h6 class="font-weight-bolder mb-0">{{ pathArray[pathArray.length - 1] }}</h6>
	</nav>
</template>

<script setup>
import { computed } from 'vue';
import { usePathStore } from '../../stores/path-store';
import { storeToRefs } from 'pinia';

const pathStore = usePathStore()
const { path: currentPath } = storeToRefs(pathStore);

const pathArray = computed(() => {
	const result = [ 'Dashboard' ];

	currentPath.value.split('/').forEach((path) => {
		if (path.length > 0)
			result.push(path[0].toUpperCase() + path.slice(1));
	});

	return (result);
});
</script>