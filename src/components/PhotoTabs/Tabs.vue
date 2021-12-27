<template>
  <div class="tabs container">
    <b-tabs active-nav-item-class="nav-tabs_active" content-class="mt-3">
      <b-tab title="Все" active><p><Men /> <Women/><Accessories /><Children /></p></b-tab>
      <b-tab title="Мужские"><p><Men /></p></b-tab>
      <b-tab title="Женские"><p><Women/></p></b-tab>
      <b-tab title="Детские"><p><Children /></p></b-tab>
      <b-tab title="Аксессуары"><p><Accessories /></p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Men from './Men.vue'
import Women from './Women.vue'
import Accessories from './Accessories.vue'
import Children from './Children.vue'
export default {
  components:{
    Men,
    Women,
    Accessories,
    Children
  }
}
</script>

<style lang="sass">


.nav-tabs
  display: flex
  text-align: center
  justify-content: space-around
  margin-bottom: 80px


.nav-link
  color: #777
  font-weight: 500
  font-size: 2vh

  &.active
    color: $primary-pink !important
  &:hover
    color: #777
  

</style>