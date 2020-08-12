<template>
  <div id="stack">
    <div class="center">
      <h1>
        Skills
      </h1>
      <div id="cards">
        <div class="l-wrap">
          <div class="three-col-grid">
            <div class="grid-item">
              <div class="direction">
              <h2>Frontend</h2>
              <div class="fill">

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/js-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/html5-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/css3-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/react-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/vue-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

              </div>
            </div></div>
            <div class="grid-item"><div class="direction">
              <h2>Backend</h2>
              <div class="fill">

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/python-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/docker-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/nginx-logo.png" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/postgresql-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/sqlite-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

              </div>
            </div></div>
            <div class="grid-item"><div class="direction">
              <h2>Tools</h2>
              <div class="fill">

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/pycharm-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/webstorm-logo.svg" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
                  <vs-button shadow icon @click="active=!active" class="dialogButton">
                    <img src="@/assets/vs-logo.png" class="dialogLogo">
                  </vs-button>
                </div>

                <div class="dialog">
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
  margin: 5% 0;
  padding-top: 12%;
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
  padding: 10px;
  border-radius: 20px;
}
.fill{
  display: flex;
  flex-wrap: wrap;
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