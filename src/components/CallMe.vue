<template>
  <div class="call-me container">
    <h1 class="call-me__title">Я хочу кое-что спросить...</h1>
    <form action="" class="call-me__form">
      <input type="text" class="call-me__input-text" placeholder="Имя" />
      <input type="text" class="call-me__input-text" placeholder="Телефон" />
      <input type="submit" class="call-me__input-btn" value="Позвоните мне" />
    </form>
  </div>
</template>

<style lang="sass">

.call-me
  &__title
    font-weight: 500
  &__form
    padding-top: 50px
    width: 100%
    display: flex
    justify-content: space-between
    input
      padding: 0 20px
      height: 60px
      color: black
      font-size: $small
      line-height: 1.33
      font-family: Rubik
      outline: none
      &[type=text]
        width: 38%
        border: 3px solid $primary-blue
      &[type=submit]
        width: 20%
        height: 60px
        font-weight: 400
        background-color: $primary-pink
        color: white
        border: none

@media screen and(max-width: 992px)
  .call-me
    margin: 0 auto
    width: calc(100% - 150px) !important
    &__form
      flex-wrap: wrap
      justify-content: center
      input
        width: 100% !important
        margin-bottom: 15px
        height: 50px
      input[type=submit]
        height: 50px

@media screen and(max-width: 576px)
  .call-me
    margin: 0 auto !important
    width: 100%  !important
</style>