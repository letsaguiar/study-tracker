<template>
  <Sidebar />
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <RouterView />
  </main>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
</script>