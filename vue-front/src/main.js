import Vue from 'vue'
import './ml'
import App from './App.vue'
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {
  colors: {
    primary:'rgb(43,43,45)',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }
})
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
