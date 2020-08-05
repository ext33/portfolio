<template>
  <div id="app">
    <Navbar/>
    <Canvas/>
  </div>
</template>

<script>
import Canvas from "@/components/v-canvas";
import Navbar from "@/components/v-navbar";

export default {
  name: 'App',
  components: {
    Navbar,
    Canvas
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
  padding: 0;
  bottom: 0;
  top: 0;
}
</style>
