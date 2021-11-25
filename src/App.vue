<template>
  <div id="app">
    <Navmenu />
    <Hamburger />
    <div id="page-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="sass">

</style>

<script>;
import Navmenu from './components/Navmenu'
import Hamburger from './components/Hamburger'

export default {
  components:{
    Navmenu,
    Hamburger
  },
  data(){
    return{
      width: window.innerWidth,
    }
  },
  methods:{
    updateWidth(){
      this.width = window.innerWidth;
    },
  },
  created(){
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>

<style lang="sass">

  .home
    z-index: 0

  body
    margin: 0
    box-sizing: border-box
    font-family: 'Rubik'
    font-weight: 400
    img
      width: 100%
  .container
    width: 1140px
    margin: 0 auto
    max-width: calc(100% - 80px)
  
  .hamburger
    display: none
  
  @media (max-width: 980px)
    .navmenu
      display: none
    .hamburger
      display: block
      position: sticky

  
  
</style>