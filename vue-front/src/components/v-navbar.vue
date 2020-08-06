<template>
  <nav>
      <div class="center">
        <vs-button border
             :active="active == 1"
             @click="active = 1">
          About me
        </vs-button>
        <vs-button border
            :active="active == 2"
            @click="active = 2">
          Skills
        </vs-button>
        <vs-button border
            :active="active == 3"
            @click="active = 3">
          Achievements
        </vs-button>
        <vs-button border
           :active="active == 4"
           @click="active = 4">
          Contacts
        </vs-button>
      </div>
  </nav>
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