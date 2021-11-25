<template>
  <div class="hamburger">
    <push noOverlay>
      <div class="hamburger__items">

      <div class="hamburger__item">
        <router-link to='/'>
        Главная</router-link>
      </div>

      <div class="hamburger__item">
        <router-link to='/glasses'>
        Очки</router-link>
      </div>

      <div class="hamburger__item">
        <router-link to="/services">
        Услуги</router-link>
      </div>

    </div>
    </push>
  </div>
</template>

<script>

import { Push } from 'vue-burger-menu'

export default {
  components:{
    Push
  }
}
</script>

<style lang="sass">

  .bm-menu
    background-color: #017DFA

  .bm-item-list
    color: white


</style>