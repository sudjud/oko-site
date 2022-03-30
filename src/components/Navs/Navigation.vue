<template>
  <div :class="`${className}__items`">
    <div :class="`${className}__item`">
      <a href="/">Главная</a>
    </div>

    <div :class="`${className}__item`">
      <a href="/glasses">Оптика</a>
    </div>

    <!-- <div :class="`${className}__item`">
      <router-link to="/services">Услуги</router-link>
    </div> -->
  </div>
</template>

<style lang="sass">



</style>

<script>
export default {
  props:{
    className: String
  }
}
</script>