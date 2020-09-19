import Vue from 'vue'
import Vuex from 'vuex'
import { register } from '@/modules/register/store'
import { login } from '@/modules/login/store'
import { alert } from '@/core/alert/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    register,
    login,
    alert
  }
})
