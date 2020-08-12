<template>
  <div id="app">
    <Canvas/>
    <Stack/>
    <Contacts/>
  </div>
</template>

<script>
import Canvas from "@/components/v-canvas";
// import Navbar from "@/components/v-navbar";
import Stack from "@/components/v-stack";
import Contacts from "@/components/v-contacts";

export default {
  name: 'App',
  components: {
    Canvas,
    Stack,
    Contacts,
  }
}
</script>

<style>
body{
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  bottom: 0;
  top: 0;
}
</style>
