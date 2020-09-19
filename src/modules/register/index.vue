<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-3 register-left">
        <label for="file-input" class="file-input">
          <img :src="!user.profileImage? require('@/assets/images/user-dummy.png') : user.profileImage" :alt="$t('register.profileImage')"/>
        </label>
        <input id="file-input" type="file" accept="image/*" ref="profileImage" name="file" @change="handleFileUpload()" />
        <div v-if="submitted && !$v.user.profileImage.required && !errorMsg" class="invalid-feedback imageerror">{{$t('register.profileImageRequired')}}</div>
        <div v-if="errorMsg" class="invalid-feedback imageerror">{{ $t('register.profileImageSizeErrorMsg') }}</div>
        <h3 class="mrt-10">{{$t('register.welcome')}}</h3>
        <p>{{$t('register.create_account_txt')}}</p>
        <input type="button" :value="$t('register.loginBtnText')" @click="redirectLogin"/><br/>
      </div>
      <div class="col-md-9 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3 class="register-heading">{{$t('register.register_user')}}</h3>
            <form @submit.prevent="submitRegistration" novalidate>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" :placeholder="$t('register.firstname')" value="" v-model="user.firstName" />
                    <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback left">{{$t('register.firstnameRequired')}}</div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" :placeholder="$t('register.lastname')" value="" v-model="user.lastName"/>
                    <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback left">{{$t('register.lastnameRequired')}}</div>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" :placeholder="$t('register.password')" value="" v-model="user.password" autocomplete="on" />
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback left">
                      <span v-if="!$v.user.password.required">{{$t('register.passwordRequired')}}</span>
                      <span v-if="!$v.user.password.minLength">{{$t('register.password6characters')}}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control"  :placeholder="$t('register.confirmpassword')" value="" v-model="user.confirmPassword" autocomplete="on" />
                    <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback left">
                      <span v-if="!$v.user.confirmPassword.required">{{$t('register.confirmpasswordRequired')}}</span>
                      <span v-if="user.confirmPassword && !$v.user.confirmPassword.sameAsPassword">{{$t('register.confirmpasswordmatch')}}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="maxl left">
                      <label class="radio inline"> 
                        <input type="radio" name="gender" value="male" v-model="user.gender">
                        <span> {{$t('register.male')}} </span> 
                      </label>
                      <label class="radio inline"> 
                        <input type="radio" name="gender" value="female" v-model="user.gender">
                        <span> {{$t('register.female')}} </span> 
                      </label>
                    </div>
                    <div v-if="submitted && !$v.user.gender.required" class="invalid-feedback left">{{$t('register.genderRequired')}}</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" class="form-control" :placeholder="$t('register.email')" value="" v-model="user.email" />
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback left">
                      <span v-if="!$v.user.email.required">{{$t('register.emailRequired')}}</span>
                      <span v-if="!$v.user.email.email">{{$t('register.emailInvalid')}}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" minlength="10" maxlength="14" name="txtEmpPhone" class="form-control" placeholder="(121) 121-1212" value="" v-model="user.phone" v-on:input="formatMobileNumber(user.phone)" />
                    <div v-if="submitted && !$v.user.phone.required" class="invalid-feedback left">{{$t('register.phoneRequired')}}</div>
                  </div>
                  <div class="form-group">
                    <select class="form-control" v-model="user.country">
                      <option class="hidden" disabled value="">{{$t('register.country')}}</option>
                      <option value="India">{{$t('register.india')}}</option>
                      <option value="United States of America">{{$t('register.usa')}}</option>
                      <option value="England">{{$t('register.england')}}</option>
                      <option value="Canada">{{$t('register.canada')}}</option>
                      <option value="Australia">{{$t('register.australia')}}</option>
                      <option value="Netherland">{{$t('register.netherland')}}</option>
                    </select>
                    <div v-if="submitted && !$v.user.country.required" class="invalid-feedback left">{{$t('register.countryRequired')}}</div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" :placeholder="$t('register.address')" value="" v-model="user.address" />
                    <div v-if="submitted && !$v.user.address.required" class="invalid-feedback left">{{$t('register.addressRequired')}}</div>
                  </div>
                  <input type="submit" class="btnRegister" :value="$t('register.register')"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { formatPhoneNumber } from '@/config/utils'
import router from '@/router'
export default {
  name: 'user_register',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        country: '',
        address: '',
        gender: '',
        profileImage: ''
      },
      errorMsg: '',
      submitted: false
    }
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      phone: { required },
      country: { required },
      address: { required },
      gender: { required },
      profileImage: { required }
    }
  },
  methods: {
    ...mapActions('register', ['registerUser']),
    formatMobileNumber (phone) {
      this.user.phone = formatPhoneNumber(phone)
    },
    handleFileUpload () {
      if(this.$refs.profileImage) {
        if(this.$refs.profileImage.files[0].size < (1024*1024*5)) {
          // this.user.profileImage = URL.createObjectURL(this.$refs.profileImage.files[0])
          let file = this.$refs.profileImage.files[0]
          if (file) {
            let obj = new FileReader()
            obj.readAsDataURL(file)
            obj.onloadend = function () {
              this.user.profileImage = obj.result
            }.bind(this)
          }
          this.errorMsg = ''
        } else {
          this.errorMsg = 'profileImageSizeErrorMsg'
        }
      }
    },
    redirectLogin () {
      router.push('/login')
    },
    submitRegistration () {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return // stop here if form is invalid
      }
      this.registerUser(this.user)
    }
  }
}
</script>

<style>

</style>
