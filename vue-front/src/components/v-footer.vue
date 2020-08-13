<template>
  <div id="Footer">
    <p class="footerText">
      Site by <a class="footerLink" href="">ext33</a>. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
#Footer{
  margin-top: 6%;
  padding-top: 4%;
}
.footerText{
  font-size: 18px;
}
.footerLink{
  text-decoration: none;
  color: #2c3e50;
}
</style>