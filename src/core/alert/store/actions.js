import * as types from './mutation-types'

const success = ({ commit }, message) => {
  commit(types.SUCCESS, message)
}

const error = ({ commit }, message) => {
  commit(types.ERROR, message)
}

const clear = ({ commit }, message) => {
  commit(types.CLEAR, message)
}

const auth = ({ commit }, message) => {
  commit(types.AUTH, message)
}

export default {
  success,
  error,
  clear,
  auth
}
