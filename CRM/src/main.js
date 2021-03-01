import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)
Vue.directive('tooltip', tooltipDirective)

firebase.initializeApp({
  apiKey: "AIzaSyDF_ieocxKZpDylLiGsGb_lPEZDUdzv7-I",
  authDomain: "crm-ac997.firebaseapp.com",
  projectId: "crm-ac997",
  storageBucket: "crm-ac997.appspot.com",
  messagingSenderId: "876146760874",
  appId: "1:876146760874:web:1f4ebd4f5bb9bf982cc4d3",
  measurementId: "G-6GE4JDJ39P"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

