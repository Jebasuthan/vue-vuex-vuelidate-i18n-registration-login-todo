import store from '@/store'

export const loginService = {
  login
}

function login (email, password) {
  let registerdUser = store.getters['register/loginedUser']
  if (registerdUser && registerdUser.email === email && registerdUser.password === password) {
    return {
      data: {
        registerdUser,
        success: true
      }
    }
  } else {
    return {
      data: {
        message: 'Login Failed! Inavalid Login Credentials!',
        success: false
      }
    }
  }
}
