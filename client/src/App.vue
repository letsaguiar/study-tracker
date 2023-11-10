<template>
  <Sidebar />
  <div class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar/Sidebar.vue';
import Navbar from './components/navbar/Navbar.vue';
</script>