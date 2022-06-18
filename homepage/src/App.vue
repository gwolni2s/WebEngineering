<script setup>
import { RouterView } from 'vue-router'
import Navbar from "./components/navbar.vue";
</script>

<template>
    <navbar/>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>

</style>
