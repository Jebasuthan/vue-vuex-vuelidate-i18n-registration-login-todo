<template>
  <section class="profile-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <div class="row">
            <div class="col-lg-6">
              <div class="profile-text">
                <h2>{{loginedUser.firstName}} {{loginedUser.lastName}}</h2>
                <p>I’m a software developer in love with playing games and passionate to update my knowledge and skills through continuous self learning and challenging work nature.</p>
              </div>
              <div class="profile-info">
                <h2>General Info</h2>
                <table class="profile-details">
                  <tr>
                    <th right>First Name:</th>
                    <td class="text-capitalize">{{loginedUser.firstName}} </td>
                  </tr>
                  <tr>
                    <th right>Last Name:</th>
                    <td class="text-capitalize">{{loginedUser.lastName}} </td>
                  </tr>
                  <tr>
                    <th right>Email Address:</th>
                    <td>{{loginedUser.email}} </td>
                  </tr>
                  <tr>
                    <th right>Phone:</th>
                    <td>{{loginedUser.phone}} </td>
                  </tr>
                  <tr>
                    <th right>Country:</th>
                    <td>{{loginedUser.country}} </td>
                  </tr>
                  <tr>
                    <th right>Gender:</th>
                    <td class="text-capitalize">{{loginedUser.gender}} </td>
                  </tr>
                  <tr>
                    <th right>Address:</th>
                    <td class="text-capitalize">{{loginedUser.address}} </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="col-lg-6">
              <figure>
                <img class="profile-image" :src="!loginedUser.profileImage ? require('@/assets/images/user-dummy.png') : loginedUser.profileImage" alt="Profile Image">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'user_home',
  computed: {
    ...mapState('login', ['loginedUser'])
  }
}
</script>
