<template>
  <div class="hamburger">
    <push noOverlay>
      <div class="hamburger__wrapper">
        <Navigation 
        :className="'hamburger'"
        />
        <div class="hamburger__links">
          <div class="">
        <a target="_blank" href="https://t.me/opticaoko95" class="">
          Телеграм
        </a>
      </div>
      <div class="">
      <a target="_blank" href="https://www.instagram.com/optika_oko_95/?hl=ru" class="hamburger__inst">
        Инстаграм
      </a>
      </div>
      <a href="tel:+79298897070" class="hamburger__tel">
        +7 929 889 70 70
      </a>
        </div>
      </div>
      
    </push>
  </div>
</template>

<script>

import { Push } from 'vue-burger-menu'
import Navigation from './Navs/Navigation'

export default {
  components:{
    Push,
    Navigation
  }
}
</script>

<style lang="sass">

  .bm-menu
    background-color: $primary-pink
    padding-top: 30px

  .bm-item-list
    color: white
    height: 100vh

  .hamburger
    &__items
      display: flex
      flex-direction: column
      color: white
    &__item
      padding-top: 10px
      a
        color: white
    &__wrapper
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 100vh
      padding-bottom: 10vh
    &__links
      display: flex
      flex-direction: column
      div
        display: flex
        align-items: center
      a
        display: flex
        align-items: center
        color: $bg-pink
        text-decoration: underline
    
    


</style>