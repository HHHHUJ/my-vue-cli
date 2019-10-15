import Vue from 'vue';

import App from '@user/App.vue';
import router from '@user/router.js';

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');