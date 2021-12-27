<template>
  <div class="algorithm">
    <div class="algorithm__number">
      {{ data.id }}
    </div>
    <div class="container algorithm__container">
      <div class="col-2">
        <div class="algorithm__img">
          <img :src="data.imgSrc" alt="">
        </div>
      </div>
      <div class="col-8">
        <div class="algorithm__title">
          {{ data.title }}     
        </div>
        <div class="algorithm__desc">
          {{ data.desc }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="sass">

.algorithm
  background-color: white
  border-radius: 20px
  margin-top: 60px
  &__number
    background-color: $primary-blue
    text-align: center
    font-size: $big-regular
    color: white
    border-radius: 20px
  div
    margin: auto auto
  &__img
    width: 200px
    margin: 0 auto
  &__title
    font-size: $big-regular
    color: $primary-pink
    line-height: 1.55
    text-transform: uppercase
  &__desc
    font-size: $regular-fsz
    line-height: 1.55
    font-weight: 300
    padding-top: 10px
  &__container
    display: flex
  

</style>