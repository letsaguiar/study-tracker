<template>
	subjects!
</template>

<script setup>
import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>