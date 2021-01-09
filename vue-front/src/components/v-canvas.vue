<template>
  <div id="container">
    <kinesis-container class="container" style="width: 90%">
      <kinesis-element>
        <kinesis-container style="padding: 90px 0;">

          <h1>e x t 3 3</h1>

          <kinesis-container tag="h4" style="height: auto">
            <kinesis-element :strength="1" style="padding: 5px">
              ~/python ~/javascript
            </kinesis-element>
            <kinesis-element :strength="1" style="padding: 5px" v-text="$ml.get('canvas')">

            </kinesis-element>
            <kinesis-element :strength="1" style="padding: 5px">
              <a href="https://github.com/ext33" target="_blank"><img src="@/assets/github-logo.svg" id="gitLogo"></a>
            </kinesis-element>
          </kinesis-container>
        </kinesis-container>
      </kinesis-element>
      <div class="circle circle-purple"></div>
      <div class="circle circle-purple1"></div>
      <div class="circle circle-purple3"></div>
    </kinesis-container>
  </div>
</template>

<script>
export default {
  name: "Canvas"
}
</script>

<style scoped>
@media (max-height: 812px){
  #container{
    margin-top: -20% !important;
  }
  .vs-switch{
    margin-left: 50% !important;
  }
}
#container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100% !important;
  font-size: 20px;
  margin-top: 40px;
}
#gitLogo{
  margin-top: 10px;
  width: 30px;
  height: 30px;
}
.container {
  padding: 11rem 0;
}

.circle {
  position: absolute;
  border-radius: 100%;
  background: #2c3e50;
}

.circle.circle-purple {
  border: 10px solid #f2eafa;
  opacity: 0.1;
  width: 4vw;
  height: 4vw;
  left: 10%;
  top: 25%;
}

.circle.circle-purple1 {
  border: 15px solid #f2eafa;
  opacity: 0.1;
  width: 8vw;
  height: 8vw;
  right: 20%;
  bottom: 27%;
}

.circle.circle-purple3 {
  border: 15px solid #f2eafa;
  opacity: 0.3;
  width: 3vw;
  height: 3vw;
  top: 80%;
  left: 60%;
}
</style>
