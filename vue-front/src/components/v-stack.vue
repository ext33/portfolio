<template>
  <div id="stack">
    <div class="center">
      <h1 v-text="$ml.get('skillTitle')"></h1>
      <div id="cards">
        <div class="l-wrap">
          <div class="three-col-grid">
            <div class="grid-item">
              <div class="direction">
              <h2 v-text="$ml.get('frontTitle')"></h2>
              <div class="fill">

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/js-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/html5-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/css3-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/vue-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

              </div>
            </div></div>
            <div class="grid-item"><div class="direction">
              <h2 v-text="$ml.get('backTitle')"></h2>
              <div class="fill">

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/python-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/docker-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/nginx-logo.png" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/postgresql-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/sqlite-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

              </div>
            </div></div>
            <div class="grid-item"><div class="direction">
              <h2 v-text="$ml.get('toolTitle')"></h2>
              <div class="fill">

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/pycharm-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/webstorm-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/vs-logo.png" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="logo1">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/vim-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

              </div>
            </div></div>
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
  margin: 6% 0;
  padding-top: 6%;
  /*background-image: -webkit-linear-gradient(275deg, #fff 19%, #DCDCDC	19%);*/
}
#cards{
  padding-top: 1%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}
.direction{
  padding: 22px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.fill{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.logo1{
  padding: 5px;
}
.dialogButton{
  border: 0;
  background: none;
  cursor: default;
}
.dialogLogo{
  width: 90px;
  height: 90px;
}
.l-wrap {
  display: grid;
  grid-gap: 3vw;
}
.grid-item {
  padding: .5em;
  text-align: center;
  margin: 3% 0;
}
</style>