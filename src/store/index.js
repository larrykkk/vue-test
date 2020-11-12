import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {},
});
