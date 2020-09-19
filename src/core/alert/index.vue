<template>
  <div v-if="alert && alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'v-alert',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  }
}
</script>

<style scoped>

</style>
