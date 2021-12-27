<template>
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="col-xxl-6 block__wrapper block__wrapper_a">
          <div class="info__block">
            <div class="info__title">Как заказать очки или линзы?</div>
            <div class="info__text">
              <p>Сначала нужно сделать <span class="blue-text">вот этот</span> шаг</p>
              <p>А за ним нужно сделать уже <span class="blue-text">второй шаг</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 block__wrapper block__wrapper_b">
          <div class="info__block">
            <div class="info__title">Когда можно забрать?</div>
            <div class="info__text">
              <p>Сначала нужно сделать вот этот шаг</p>
              <p>А за ним нужно сделать уже <span class="blue-text">второй шаг</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

.info
  display: flex
  &__block
    transform: rotate(4deg)
    padding: 50px
    a
      position: relative
      left: 400px
      top: 50px
      border: 3px solid $primary-blue
  &__wrapper
    display: flex
    flex-direction: row
    justify-content: space-between
  &__title
    font-size: $big-fsz
    color: $primary-pink
    text-transform: uppercase
    line-height: 1.55
    margin-bottom: 15px
.blue-text
  color: $primary-pink
  font-weight: 400

.block__wrapper
  border-radius: 15px
  transform: rotate(-4deg)
  width: 45%
  &_a
    border-top: 3px solid $primary-blue
    border-bottom: 3px solid $primary-blue
  &_b
    border-top: 3px solid $primary-pink
    border-bottom: 3px solid $primary-pink

</style>

