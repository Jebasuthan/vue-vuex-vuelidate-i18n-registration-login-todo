import * as types from './mutation-types'
import router from '@/router'

const registerUser = ({ dispatch, commit }, user) => {
  commit(types.SIGNUP, user)
  dispatch('alert/success', 'User Registed Successfully!.', { root: true })
  router.push('/login')
}

const logout = ({ commit }) => {
  commit(types.LOGOUT)
  router.push('/')
}

export default {
  registerUser,
  logout
}