<template>
    <div class="card">
        <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
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

const props = defineProps(['title', 'content', 'icon']);

</script>