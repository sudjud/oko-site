<template>
  <div class="admin">
    <h1>Запросы на звонок: </h1>
    <div class="admin__reqs">
      <div class="admin__req">
        <p>asd</p><p>123</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>

.admin
  height: 100vh
  text-align: center
  &__req
    display: flex
    justify-content: center
    p:first-child
      border-right: 2px solid black
      padding-right: 20px 
    p:last-child
      padding-left: 20px



</style>