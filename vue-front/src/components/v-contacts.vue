<template>
  <div id="Contacts">
    <h1>
      Contacts
    </h1>
    <div class="cont">
      <div class="logo1">
        <vs-button shadow icon @click="active=!active" class="logoBtn">
          <img src="@/assets/contacts/email.svg" class="contactsLogo">
        </vs-button>
        <vs-dialog not-close v-model="active">
          <template>
            <div class="modalContent">
              <div class="modalLogo">
                <img src="@/assets/contacts/email.svg" class="contactsLogo">
              </div>
              <div class="modalDesc">
                <p class="modalText">
                  You may contact me with email: <br><b><a class="modalLink" href="mailto:redwoodx3@gmail.com" target="_blank">redwoodx3@gmail.com</a></b>
                </p>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
      <div class="logo1">
        <vs-button shadow icon @click="active2=!active2" class="logoBtn">
          <img src="@/assets/contacts/telegram.svg" class="contactsLogo">
        </vs-button>
        <vs-dialog not-close v-model="active2">
          <template>
            <div class="modalContent">
              <div class="modalLogo">
                <img src="@/assets/contacts/telegram.svg" class="contactsLogo">
              </div>
              <div class="modalDesc">
                <p class="modalText">
                  Also you may contact me with telegram: <br><b><a class="modalLink" href="https://t.me/xdxd3xd" target="_blank">@xdxd3xd</a></b>
                </p>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
      <div class="logo1">
        <vs-button shadow icon @click="active3=!active3" class="logoBtn">
          <img src="@/assets/contacts/instagram.svg" class="contactsLogo">
        </vs-button>
        <vs-dialog not-close v-model="active3">
          <template>
            <div class="modalContent">
              <div class="modalLogo">
                <img src="@/assets/contacts/instagram.svg" class="contactsLogo">
              </div>
              <div class="modalDesc">
                <p class="modalText">
                  If you interested, my instagram: <br><b><a class="modalLink" href="https://www.instagram.com/ext33_/" target="_blank">ext33</a></b>
                </p>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
      <div class="logo1">
        <vs-button shadow icon @click="active4=!active4" class="logoBtn">
          <img src="@/assets/github-logo.svg" class="contactsLogo">
        </vs-button>
        <vs-dialog not-close v-model="active4">
          <template>
            <div class="modalContent">
              <div class="modalLogo">
                <img src="@/assets/github-logo.svg" class="contactsLogo">
              </div>
              <div class="modalDesc">
                <p class="modalText">
                  All my projects on github: <br><b><a class="modalLink" href="https://github.com/ext33" target="_blank">ext33</a></b>
                </p>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Contacts",
  data:() => ({
    active: false,
    active2: false,
    active3: false,
    active4: false,
  })
}
</script>

<style scoped>
#Contacts{
  margin: 6% 0;
  padding-top: 5%;
}
.cont{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.contactsLogo{
  width: 70px;
  height: 70px;
}
.logoBtn{
  margin: 20px;
}
.modalContent{
  padding: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.modalLogo{
  float: left;
}
.modalDesc{
  float: right;
  margin-left: 20px;
}
.modalText{
  font-size: 17px;
}
.modalLink{
  text-decoration: none;
  color: #2c3e50;
}

</style>