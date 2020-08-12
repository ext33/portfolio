<template>
  <div id="container">
          <kinesis-container class="container" style="width: 100%">
            <kinesis-element>
              <kinesis-container style="width: 100%; height: 100% !important; padding: 90px 0;">

                <kinesis-container tag="h1" style="height: auto">
                  <kinesis-element style="display: inline-block; padding: 5px" axis="x" type="rotate">
                    e
                  </kinesis-element>
                  <kinesis-element style="display: inline-block; padding: 5px" axis="x" type="rotate">
                    x
                  </kinesis-element>
                  <kinesis-element style="display: inline-block; padding: 5px" axis="x" type="rotate">
                    t
                  </kinesis-element>
                  <kinesis-element style="display: inline-block; padding: 5px" axis="x" type="rotate">
                    3
                  </kinesis-element>
                  <kinesis-element style="display: inline-block; padding: 5px" axis="x" type="rotate">
                    3
                  </kinesis-element>
                </kinesis-container>

                <kinesis-container tag="h4" style="height: auto">
                  <kinesis-element :strength="1" style="padding: 5px">
                    ~/python ~/javascript
                  </kinesis-element>
                  <kinesis-element :strength="1" style="padding: 5px">
                    web developer
                  </kinesis-element>
                  <kinesis-element :strength="1" style="padding: 5px">
                    <a href="https://github.com/ext33" target="_blank"><img src="@/assets/github-logo.svg" id="gitLogo"></a>
                  </kinesis-element>
                </kinesis-container>
              </kinesis-container>
            </kinesis-element>

            <!-- background-circles-props -->
            <kinesis-element>
              <div class="circle circle-purple"></div>
            </kinesis-element>
            <kinesis-element>
              <div class="circle circle-purple1"></div>
            </kinesis-element>
            <kinesis-element>
              <div class="circle circle-purple2"></div>
            </kinesis-element>
            <kinesis-element>
              <div class="circle circle-purple3"></div>
            </kinesis-element>
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
    margin-top: -10% !important;
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
  right: 10%;
  bottom: 27%;
}
.circle.circle-purple2 {
  background-color: #f2eafa;
  opacity: 0.1;
  width: 5vw;
  height: 5vw;
  left: 20%;
  bottom: 17%;
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