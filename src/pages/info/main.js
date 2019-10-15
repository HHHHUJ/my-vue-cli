import Vue from 'vue';

import App from '@info/App.vue';
import router from '@info/router.js';

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');