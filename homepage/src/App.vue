<script setup>
import { RouterView } from 'vue-router'
import Navbar from "./components/navbar.vue";
</script>

<template>
  <header>
    <navbar/>
  </header>
    <body>
      <div class="container">
        <RouterView />
      </div>
    </body>
</template>

<style>
body {
  padding-top: 30px;
  margin: 8px 4px;
}
</style>
