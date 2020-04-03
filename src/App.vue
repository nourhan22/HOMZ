<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestCard />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestCard from './components/product-card/product-card.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    TestCard
  }
}
</script>

<style>
#app {
  font-family: Arial,Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
