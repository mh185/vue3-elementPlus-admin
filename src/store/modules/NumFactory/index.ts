import { Module } from 'vuex'
import NumFactoryStateTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const numFactoryModule: Module<NumFactoryStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    type: false,
  },
  mutations: {
    DOUBLE_COUNT(state: NumFactoryStateTypes) {
      if (state.type == true) {
        state.type = false
      } else {
        state.type = true
      }
    },
  },
  actions: {}
}

export default numFactoryModule
