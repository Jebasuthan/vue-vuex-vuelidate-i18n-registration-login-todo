import * as types from './mutation-types'
import { loginService } from '../services'
import router from '@/router'

const login = ({ dispatch, commit }, { email, password }) => {
  let response = loginService.login(email, password)
  console.log('login', response)
  if (response.data.success) {
    commit(types.LOGIN_SUCCESS, response.data.registerdUser)
    router.push('/home')
  } else {
    commit(types.LOGIN_FAILED, response.data)
    dispatch('alert/error', response.data.message, { root: true })
  }
}

const logout = ({ commit }) => {
  commit(types.LOGOUT)
  router.push('/login')
}

export default {
  login,
  logout
}
