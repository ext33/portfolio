<template>
  <div id="app">
    <go-top class="topButton"></go-top>
    <Navbar/>
    <Canvas/>
    <Stack/>
    <Contacts/>
    <Footer/>
  </div>
</template>

<script>
import Canvas from "@/components/v-canvas";
import Navbar from "@/components/v-navbar";
import Stack from "@/components/v-stack";
import Contacts from "@/components/v-contacts";
import Footer from "@/components/v-footer";
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'App',
  components: {
    Navbar,
    Canvas,
    Stack,
    Contacts,
    Footer,
    GoTop
  }
}
</script>

<style>
body{
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
.topButton{
  border: none !important;
  background-color: #6C6C6C !important;
  outline: none 0px;
}
</style>
