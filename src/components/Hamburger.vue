<template>
  <div class="hamburger">
    <push noOverlay>
      <Navigation 
        :className="'hamburger'"
      />
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

  .hamburger__items
    display: flex
    flex-direction: column
    color: white
  .hamburger__item
    padding-top: 10px
    a
      color: white
    


</style>