<template>
	<li class="nav-item">
		<RouterLink class="nav-link text-white" :to="props.to" :class="dynamicClasses">
			<div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
				<i :class="props.icon"></i>
			</div>
			<span class="nav-link-text ms-1">{{ props.title }}</span>
		</RouterLink>
	</li>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePathStore } from '../../stores/path-store';
import { computed } from 'vue';

const props = defineProps(['to', 'icon', 'title'])
const pathStore = usePathStore();
const { path: currentPath } = storeToRefs(pathStore)

const dynamicClasses = computed(() => {
	if (props.to === currentPath.value)
		return (['bg-gradient-primary', 'active']);
	return ([]);
});
</script>