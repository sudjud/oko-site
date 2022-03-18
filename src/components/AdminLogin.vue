<template>
  <div class="container admin-login">
    <form class="col-xxl-5 col-xl-5 col-lg-5 col-md-4 col-sm-9 col-9 admin">
      <label for="adminLogin">Логин:</label>
      <input v-model="adminData.adminLogin" name="adminLogin" type="text">
      <label for="adminLogin">Пароль:</label>
      <input v-model="adminData.adminPass" name="adminPass" type="password">
      <input type="submit" value="Войти">
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return{
      adminData:{
        adminLogin: '',
        adminPass: ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  .admin-login
    height: 100vh
    form
      display: flex
      flex-direction: column
      margin: 0 auto
      input[type="submit"]
        margin-top: 15px

</style>