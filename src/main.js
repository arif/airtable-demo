import 'babel-polyfill';

/**
 * Main file
 */
import Vue from 'vue';

/**
 * Plugins
 */
import './plugins/vuex';
import './plugins/bootstrap-vue';

/**
 * Styling
 */
import './assets/style/app.scss';

/**
 * Main application.
 */
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
