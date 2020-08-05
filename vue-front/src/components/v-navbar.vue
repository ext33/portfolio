<template>
      <div class="center">
        <vs-button border
            :active="active == 0"
            @click="active = 0">
          Stack
        </vs-button>
        <vs-button border
            :active="active == 1"
            @click="active = 1">
          Achievements
        </vs-button>
        <vs-button border
           :active="active == 2"
           @click="active = 2">
          Contacts
        </vs-button>
      </div>
</template>

<script>
export default {
  data:() => ({
    active: 0
  }),
name: "Navbar"
}
</script>

<style scoped>
.center{
  margin-top: -20px;
}
.center button{
  display: inline-block;
}
</style>