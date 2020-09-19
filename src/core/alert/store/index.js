import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  type: null,
  message: null
}

export const alert = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
