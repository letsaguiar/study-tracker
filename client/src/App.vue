<template>
  <Sidebar />
  <div class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
</script>