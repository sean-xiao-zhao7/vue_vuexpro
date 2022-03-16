import { createStore } from 'vuex';
import productModule from './modules/product.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    loginAction(context) {
      context.commit('login');
    },
    logoutAction(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuth(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
