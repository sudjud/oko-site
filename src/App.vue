<template>
  <div id="app">
    <div style="position: absolute;">{{ width }}
    {{ height }}</div> 
    <Navmenu />
    <Hamburger />
    <div id="page-wrap">
      <router-view></router-view>
    </div>
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<style lang="sass">

</style>

<script>;
import Navmenu from './components/Navs/Navmenu.vue'
import Hamburger from './components/Hamburger.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Navmenu,
    Hamburger,
    Footer
  },
  data(){
    return{
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  methods:{
    updateWidth(){
      this.width = window.innerWidth;
    },
    updateHeight(){
      this.height = window.innerHeight;
    },
  },
  created(){
    window.addEventListener('resize', this.updateWidth),
    window.addEventListener('resize', this.updateHeight)
  }
}
</script>

<style lang="sass">


  
  .hamburger
    display: none

  @media (max-width: 980px)
    .navmenu
      display: none
    .hamburger
      display: block
      position: sticky
      top: 0
      z-index: 3

  
  
</style>