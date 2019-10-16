import Vue from 'vue';

import App from '@info/App.vue';
import router from '@info/router.js';
import VCharts from 'v-charts'

Vue.config.productionTip = false;

Vue.use(VCharts);

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');