<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="header" v-if="isUserLoggedIn">
    <b-navbar-brand href="#">{{$t('header.title')}}</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" class="profile-li" right @change="changeLanguage(selectedLanguage)" v-model="selectedLanguage">
          <b-dropdown-item href="#" :key="language.id" v-for="language in listLanguages" :value="language.value" :label="language.title">{{language.title}}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right v-if="isUserLoggedIn" >
          <template v-slot:button-content>
            <img class="profileImage" :src="!loginedUser.profileImage? require('@/assets/images/user-dummy.png') : loginedUser.profileImage" :alt="$t('register.profileImage')"/>
            <!-- <span>{{$t('header.user')}}</span> -->
          </template>
          <b-dropdown-item><router-link to="/home">{{$t('header.profile')}}</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/todo">{{$t('header.todo')}}</router-link></b-dropdown-item>
          <b-dropdown-item @click.prevent="userLogout"><router-link to="/login">{{$t('header.logout')}}</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import i18n from '@/i18n'

export default {
  name: 'user-header',
  data () {
    return {
      selectedLanguage: 'en',
      listLanguages: [
        { id: 'en', value: 'en', title: 'English' },
        { id: 'fr', value: 'fr', title: 'French' },
        { id: 'tn', value: 'tn', title: 'தமிழ்' }
      ]
    }
  },
  computed: {
    ...mapState('login', ['isUserLoggedIn', 'loginedUser'])
  },
  methods: {
    ...mapActions('login', ['logout']),
    userLogout () {
      this.logout()
    },
    changeLanguage (locale) {
      i18n.locale = locale
      this.navitemSelected()
    }
  }
}
</script>

<style>

</style>
