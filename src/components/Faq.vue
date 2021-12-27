<template>
  <div class="faq">
    <div class="container">
      <h1>
        FAQ
      </h1>
      <div class="faq__desc">
        Мы&nbsp;постарались ответить на&nbsp;самые популярные вопросы, которые к&nbsp;нам поступают. Если вы&nbsp;не&nbsp;нашли нужный ответ, то&nbsp;просто свяжитесь с&nbsp;нами любым удобным способом
      </div>
      <div class="faq__questions">
        <div class="faq__questions_question">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="faq__questions_answer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quaerat.
        </div>
        <div class="faq__questions_question">
          Вопрос первый.
        </div>
        <div class="faq__questions_answer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quaerat.
        </div>
        <div class="faq__questions_question">
          Вопрос первый.
        </div>
        <div class="faq__questions_answer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quaerat.
        </div>
        <div class="faq__questions_question">
          Вопрос первый.
        </div>
        <div class="faq__questions_answer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quaerat.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

.faq
  padding-bottom: 150px
  &__desc
    color: black
    font-size: $regular-fsz
    font-weight: 300
    line-height: 1.55
    padding-top: 20px
    width: 50%
  &__questions
    padding-top: 30px
    &:last-child
      border-bottom: 3px solid $primary-pink
    &_question
      font-size: $big-regular
      border-top: 3px solid $primary-pink
      padding: 20px 10px 0 10px
      color: black
    &_answer
      font-size: $regular-fsz
      font-weight: 300
      padding: 20px

</style>