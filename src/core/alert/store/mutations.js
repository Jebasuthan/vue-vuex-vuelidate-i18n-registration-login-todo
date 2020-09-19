import {
  ERROR,
  SUCCESS,
  CLEAR,
  AUTH
} from './mutation-types'

export default {
  [SUCCESS] (state, message) {
    state.type = 'alert-success'
    state.message = message
  },
  [ERROR] (state, message) {
    state.type = 'alert-danger'
    state.message = message
  },
  [CLEAR] (state) {
    state.type = null
    state.message = null
  },
  [AUTH] (state) {
    state.isUserLoggedIn = null
    state.message = null
  }
}
