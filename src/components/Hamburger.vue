<template>
  <div class="hamburger">
    <push noOverlay>
      <Navigation 
        :className="'navmenu'"
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
    background-color: #017DFA

  .bm-item-list
    color: white


</style>