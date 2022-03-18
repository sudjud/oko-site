import Vue from 'vue'
import Vuex from 'vuex'
import paraModule from './paraData'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paraData1: paraModule.getters.paraData.paraData1,
    paraData2: paraModule.getters.paraData.paraData2,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  getters:{
    paraData1: state => {
      return state.paraData1
    },
    paraData2: state => {
      return state.paraData2
    }
  }
})
