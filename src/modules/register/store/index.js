import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import { getStore } from '@/config/utils'

const user = getStore('user')
const state = {
  isUserLoggedIn: !!user,
  loginedUser: user
}

export const register = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
