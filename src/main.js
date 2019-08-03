import Vue from 'vue'
import App from './App'
import './styles/index.scss'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.config._mpTrace = true
App.mpType = 'app'
Vue.use(MpvueRouterPatch)

const app = new Vue(App)
app.$mount()
