<template>
  <div id="app">
    <Navmenu />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Navmenu from './components/Navmenu'
export default {
  components:{
    Navmenu
  }
}
</script>

<style lang="sass">

  body
    margin: 0
    box-sizing: border-box
    font-family: 'Rubik'
    font-weight: 400
    img
      width: 100%

</style>