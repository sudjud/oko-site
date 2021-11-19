<template>
  <div v-rellax="{speed: data.relSpeed}">
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

</style>