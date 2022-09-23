import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import layout from './modules/layout'
import menu from './modules/menu'

import admin from './modules/admin'
import judge from './modules/judge'
import mentor from './modules/mentor'
import participant from './modules/participant'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      layout,
      menu,

      admin,
      judge,
      mentor,
      participant
    }
});

