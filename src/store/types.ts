import NumFactoryStateTypes from './modules/NumFactory/types'
import ToggleSettingTypes from './modules/ToggleSettings/types'
import Login from './modules/Login/types'

export default interface RootStateTypes {
  text: string
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
  toggleSettings: ToggleSettingTypes
  login: Login
}
