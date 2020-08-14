<template>
  <div id="Footer">

    <p class="footerText">
      <span v-text="$ml.get('footerDesc')"></span> <a class="footerLink" href="">ext33</a>.
    </p>
  </div>
</template>

<script>
export default {
name: "Footer",
  data:() => ({
    option1: true,
  })
}
</script>

<style scoped>
#Footer{
  margin-top: 6%;
  padding-top: 4%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 1%;
}
.footerText{
  font-size: 18px;
  font-weight: bold;
}
.footerLink{
  text-decoration: none;
  color: #2c3e50;
}
</style>