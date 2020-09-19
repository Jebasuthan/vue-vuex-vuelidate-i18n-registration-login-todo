import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from './mutation-types'
import { setStore, removeItem } from '@/config/utils'

export default {
  [LOGIN_SUCCESS] (state, user) {
    setStore('user', user)
    state.isUserLoggedIn = true
    state.loginedUser = user
  },
  [LOGIN_FAILED] (state) {
    state.isUserLoggedIn = false
    state.loginedUser = null
  },
  [LOGOUT] (state) {
    removeItem('user')
    state.isUserLoggedIn = false
    state.loginedUser = ''
  }
}
