<template>
  <div class="algorithm">
    <div class="algorithm__number">
      {{ data.id }}
    </div>
    <div class="container algorithm__container">
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-4">
        <div class="algorithm__img">
          <img :src="data.imgSrc" alt="">
        </div>
      </div>
      <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
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
    flex-wrap: wrap
    padding: 10px 0

  @media screen and (max-width: 991px)
    text-align: center

</style>