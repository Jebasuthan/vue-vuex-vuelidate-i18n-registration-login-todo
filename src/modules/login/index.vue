<template>
  <main class="login-form">
    <div class="cotainer">
      <VAAlert class="statusMsg" />
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">{{$t('login.title')}}</div>
            <div class="card-body">
              <form @submit.prevent="loginSubmit" novalidate>
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">{{$t('login.email')}}</label>
                  <div class="col-md-6">
                    <input type="text" v-model="user.email" id="email" class="form-control" name="email" value="" :placeholder="$t('login.email')">
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback left">
                      <span v-if="!$v.user.email.required">{{$t('login.emailrequired')}}</span>
                      <span v-if="!$v.user.email.email">{{$t('login.invalidemail')}}</span>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">{{$t('login.password')}}</label>
                  <div class="col-md-6">
                    <input type="password" v-model="user.password" id="password" class="form-control" name="password" :placeholder="$t('login.password')" value="" autocomplete="on" />
                    <div v-if="submitted && !$v.user.password.required" class="invalid-feedback left">{{$t('login.passwordrequired')}}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="checkbox left">
                      <label>
                        <input type="checkbox" name="remember"> {{$t('login.rememberme')}}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{$t('login.loginbuttontxt')}}</button>
                  <router-link to="/register" class="btn btn-link">{{$t('login.newusertext')}}</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import VAAlert from '@/core/alert'

export default {
  name: 'user_login',
  components: {
    VAAlert
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    ...mapActions('login', ['login']),
    loginSubmit () {
      this.submitted = true
      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.login(this.user)
    }
  }
}
</script>

<style>

</style>
