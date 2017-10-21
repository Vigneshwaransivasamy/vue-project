import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    categories: []
  },
  mutations: {
    addToCart: (state, payload) => state.cart.unshift(payload)
  },
  getters: {
    cart: state => state.cart,
    categories: state => state.categories
  },
  actions: {
    addToCart: ({ commit, state }, payload) => {
      commit('addToCart', payload)
    }
  }
})
