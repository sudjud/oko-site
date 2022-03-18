<template>
  <div class="admin">
    <!-- <AdminLogin /> -->
    <ReqsToCall />
  </div>
</template>

<script>
import AdminLogin from '../components/AdminLogin.vue'
import ReqsToCall from '../components/ReqsToCall.vue'
export default {
  components:{
    AdminLogin,
    ReqsToCall
  },
  methods:{
    submitHandler(){
      if (this.$v.$invalid){
        this.$v.$touch()
        return
      }
    }
  }
}
</script>

<style lang="sass">

  .admin
    height: 100vh

</style>