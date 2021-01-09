<template>
  <nav>
    <vs-button relief class="navButton" v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
  </nav>
</template>

<script>
export default {
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
  font-size: 16px;
  font-weight: bold;
}
</style>
