<template>
  <div id="stack">
    <div class="center">
      <h2>
        Skills
      </h2>
      <div id="cards">

        <div class="direction">
          <h3>Frontend</h3>
          <div class="fill">

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/js-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/html5-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/css3-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/react-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/vue-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

          </div>
        </div>

        <div class="direction">
          <h3>Backend</h3>
          <div class="fill">

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/python-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/docker-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/nginx-logo.png" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/postgresql-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/sqlite-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>



          </div>
        </div>

        <div class="direction">
          <h3>Tools</h3>
          <div class="fill">

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/pycharm-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/webstorm-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/vs-logo.png" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

            <div class="dialog">
              <vs-button shadow icon @click="active=!active" class="dialogButton">
                <img src="@/assets/vim-logo.svg" class="dialogLogo">
              </vs-button>
              <vs-dialog v-model="active">

              </vs-dialog>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    active: false,
    input1: '',
    input2: '',
    checkbox1: false
  }),
  name: "Stack"
}
</script>

<style scoped>
#stack{
  padding-top: 6%;
}
#cards{
  padding-top: 1%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}
.direction{
  border: 1px solid gray;
  margin: 2%;
  padding: 10px;
  border-radius: 20px;

}
.direction:hover{

}
.fill{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.dialog{
  padding: 5px;
}
.dialogButton{
  border: 0;
  background: none;
}
.dialogLogo{
  width: 80px;
  height: 80px;
}
</style>