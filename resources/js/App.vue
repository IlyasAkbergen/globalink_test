<template>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
    created () {
      // this.$axios.interceptors.request.use(
      //   config => {
      //     return {
      //       ...config,
      //       ...{
      //         headers: {
      //           'X-Requested-With': 'XMLHttpRequest',
      //           'X-CSRF-TOKEN': this.$store.state.auth.token,
      //         }
      //       },
      //     }
      //   },
      //   error => {
      //     if (error.response.status === 401) {
      //
      //       vm.$router.push({name: 'auth.login'});
      //
      //     } else if (error.response.status === 422) {
      //
      //       if (error.response.data.errors){
      //
      //         for(let key in error.response.data.errors){
      //
      //           vm.$validator.errors.add({field: key, msg: error.response.data.errors[key]})
      //         }
      //       }
      //
      //     } else {
      //         console.error(error)
      //     }
      //
      //     Promise.reject(error)
      //   }
      // );
      //
      // this.$axios.interceptors.response.use(response => {
      //   if (typeof response.headers.newauthorization !== 'undefined') {
      //     this.$store.commit('auth/setToken', response.headers.newauthorization)
      //   }
      //   return response
      // }, err => {
      //   if (err.response.status === 401) {
      //     this.$store.commit('auth/delToken');
      //     this.$router.push({name: 'auth.login'})
      //   }
      //   if (err.response.status === 403) {
      //     this.$router.push({name: 'tickets'})
      //   }
      //   return new Promise((resolve, reject) => {
      //     throw err
      //   })
      // })
    }
  }
</script>

<style scoped>

</style>