<template>
  <div id="app">
    <navbar></navbar>
    <sidenav></sidenav>
    <sidebar></sidebar>
    <main></main>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import AnalyseInput from './components/AnalyseInput.vue'
//import menu from './components/menu' // source: https://github.com/lookacat/vue-blob-menu-animation/blob/main/src/components/BlobMenu.vue
import sidenav from './components/sidenav'
import sidebar from './components/sidebar'
import navbar from'./components/navbar'
import main from './components/main'

export default {
  name: 'App',
  components: {
    sidenav, sidebar, navbar, main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
