<template>
  <div class="container" v-rellax="{speed: data.relSpeed}">
    <kinesis-element
      tag="img"
      :src="data.imgSrc"
      :strength="data.strength"
      class="glasses-icon"
      :style="`top: ${data.top}; left: ${data.left}`"
    >
    </kinesis-element>
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

.glasses-icon
  position: absolute
  width: 50px

@media screen and (max-width: 1024px)
  .glasses-icon
    width: 45px

@media screen and (max-width: 768px)
  .glasses-icon
    width: 40px

@media screen and (max-width: 576px)
  .glasses-icon
    width: 33px

@media screen and (max-width: 425px)
  .glasses-icon
    width: 27px
</style>