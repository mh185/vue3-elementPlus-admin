import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import numFactoryModule from './modules/NumFactory'
import toggleSettings from "./modules/ToggleSettings"
import login from "./modules/Login"

export const store = createStore<RootStateTypes>({
  state: {
    text: ''
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    numFactoryModule,
    toggleSettings,
    login
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
