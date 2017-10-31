/* eslint no-console: 0 */

import Vue from 'vue';
import App from './App.vue';
import Eagle from 'eagle.js';
import 'eagle.js/dist/eagle.css';

Vue.config.productionTip = false;
Vue.use(Eagle);

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
