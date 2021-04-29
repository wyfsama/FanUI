import Vue from 'vue'
import App from './App.vue'
import FanButton from '@/components/button'
import FanDialog from '@/components/dialog'
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.component(FanButton.name, FanButton)
Vue.component(FanDialog.name, FanDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
