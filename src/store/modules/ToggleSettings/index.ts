import { Module } from 'vuex'
import ToggleSettingTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const toggleSettings: Module<ToggleSettingTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    type: false,
  },
  mutations: {
    DOUBLE_COUNT_TWO(state: ToggleSettingTypes, name: boolean) {
      state.type = name
    },
  },
  actions: {}
}

export default toggleSettings
