import Vue from 'vue';

import App from '@user/App.vue';
import router from '@user/router.js';
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

Vue.config.productionTip = false;


Vue.use(VueLayers)


new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');