<template>
  <nav>
    <vs-button relief class="navButton" v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
  </nav>
</template>

<script>
export default {
  data:() => ({
    active: 0,
  }),
name: "Navbar"
}
</script>

<style scoped>
nav{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.navButton{
  padding: 10px 15px;
}
</style>