<template>
  <div id="app">
    <AnalyseInput letters="0" spacess="0" words="0"></AnalyseInput>
    <AnalyseInput letters="0" spacess="0" words="0"></AnalyseInput>
    <AnalyseInput letters="0" spacess="0" words="0"></AnalyseInput>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import AnalyseInput from './components/AnalyseInput.vue'

export default {
  name: 'App',
  components: {
    AnalyseInput
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
