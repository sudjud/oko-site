<template>
  <div class="call-me">
    <div class="container">
      <div class="call-me__title">Я хочу кое-что спросить...</div>
      <form action="" class="call-me__form">
        <input type="text" class="call-me__input-text" placeholder="Имя" />
        <input type="text" class="call-me__input-text" placeholder="Телефон" />
        <input type="submit" class="call-me__input-btn" value="Позвоните мне" />
      </form>
    </div>
  </div>
</template>

<style lang="sass">

  .call-me
    padding-top: 90px
    &__title
      font-size: 48px
      color: #2AC1FF
      line-height: 1.45
      font-weight: 600
    &__form
      padding-top: 50px
      width: 100%
      display: flex
      justify-content: space-between
      input
        padding: 0 20px
        height: 60px
        color: black
        font-size: 16px
        line-height: 1.33
        font-family: Rubik
        outline: none
        &[type=text]
          width: 34%
          border: 3px solid #2AC1FF
        &[type=submit]
          width: 20%
          height: 66px
          font-weight: 500
          background-color: #F074B0
          border: none

</style>