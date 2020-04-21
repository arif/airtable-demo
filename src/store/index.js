import Vuex from 'vuex';
import home from './modules/pages/home';

export default new Vuex.Store({
  modules: {
    home,
  },
  strict: process.env.VUE_APP_DEBUG,
});
