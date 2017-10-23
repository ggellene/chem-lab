/* eslint no-console: 0 */

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}
})



// import Vue from 'vue';
// import App from './App.vue';
//
// document.addEventListener('DOMContentLoaded', () => {
//   document
//     .getElementById('app')
//     .appendChild(document.createElement('slide'));
//   const app = new Vue(App).$mount('slide');
//
//   console.log(app)
// });
