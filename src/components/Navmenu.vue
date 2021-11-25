<template>
  <div class="navmenu">

    <div class="navmenu__items">

      <div class="navmenu__item">
        <router-link to='/'>
        Главная</router-link>
      </div>

      <div class="navmenu__item">
        <router-link to='/glasses'>
        Очки</router-link>
      </div>

      <div class="navmenu__item">
        <router-link to="/services">
        Услуги</router-link>
      </div>

    </div>
    
    <div class="navmenu__contacts">
      <div class="navmenu__inst-icon_wrapper">
      <a target="_blank" href="https://www.instagram.com/optika_oko_95/?hl=ru" class="navmenu__inst-icon">
        <img src="../assets/img/home/inst.svg" alt="">
      </a>
      </div>
      <a href="tel:+79298897070" class="navmenu__phone-number">
        +7 929 889 70 70
      </a>
    </div>
    

  </div>
</template>

<style lang="sass">

  .navmenu
    padding: 35px 40px
    position: sticky
    top: 0
    left: 0
    opacity: 0.9
    background-color: #fff
    z-index: 1
    display: flex
    justify-content: space-between
    a 
      color: rgb(164, 170, 185)
    &__inst-icon
      img
        width: auto
      &_wrapper
        padding-right: 30px
    &__item
      font-style: 16px
      margin-right: 60px
    &__items
      display: flex
      align-items: center
    &__contacts
      display: flex
      align-items: center
    &__phone-number
      font-size: 14.5px
      color: black
      font-weight: 500
      padding-right: 30px
  a
    text-decoration: none
    transition: all .3s
    cursor: default
    &:hover
      color: rgb(111, 121, 145)
      cursor: pointer

</style>