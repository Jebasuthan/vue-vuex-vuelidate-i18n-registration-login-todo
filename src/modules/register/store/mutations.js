import { SIGNUP, LOGOUT } from './mutation-types'
import { setStore, removeItem } from '@/config/utils'

export default {
  [SIGNUP] (state, user) {
    setStore('user', user)
    state.isUserLoggedIn = false
    state.loginedUser = user
  },
  [LOGOUT] (state) {
    removeItem('user')
    state.isUserLoggedIn = false
    state.loginedUser = null
  }
}
