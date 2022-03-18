<template>
  <header class="navmenu">

    <Navigation 
      :className="'navmenu'"
    />
    <img src="../../assets/img/logo2.png" alt="">
    <div class="navmenu__contacts">
      <div class="navmenu__inst-icon_wrapper">
      <a target="_blank" href="https://www.instagram.com/optika_oko_95/?hl=ru" class="navmenu__inst-icon">
        <img src="../../assets/img/home/inst.svg" alt="">
      </a>
      </div>
      <a href="tel:+79298897070" class="navmenu__phone-number">
        +7 929 889 70 70
      </a>
    </div>
    

  </header>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  components:{
    Navigation
  },
}
</script>

<style lang="sass">

  .navmenu
    padding: 10px 40px
    position: sticky
    top: 0
    left: 0
    opacity: 0.9
    background-color: $primary-blue
    z-index: 1
    display: flex
    justify-content: space-between
    a 
      color: white
    img 
      width: 100px
    &__inst-icon
      img
        width: 40px
      &_wrapper
        padding-right: 30px
    &__item
      font-style: 16px
      margin-right: 60px
      &:last-child
        margin-right: 0
    &__items
      display: flex
      align-items: center
    &__contacts
      display: flex
      align-items: center
      width: 291px
    &__phone-number
      font-size: 20px
      color: black
      font-weight: 500
      padding-right: 30px
    a
      text-decoration: none
      transition: all .3s
      cursor: default
      &:hover
        color: $bg-pink
        cursor: pointer

</style>