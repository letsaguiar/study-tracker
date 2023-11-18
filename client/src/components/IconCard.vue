<template>
    <div class="card">
        <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape shadow-dark text-center border-radius-xl mt-n4 position-absolute" :class="[colorDynamicClass]">
                <i :class="icon"></i>
            </div>
            <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">{{ title }}</p>
                <span class="fs-6 fw-bold mb-0">{{ content }}</span>
            </div>
        </div>
        <div class="card-footer p-3"></div>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps(['title', 'content', 'icon', 'color']);

const colorDynamicClass = computed(() => {
	return `bg-gradient-${props.color}`;
});

</script>