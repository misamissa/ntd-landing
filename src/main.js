import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import VueParticles from 'vue-particles'
Vue.use(VueCarousel)
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
