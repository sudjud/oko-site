<template>
  <div class="visit-card_wrapper">
  <div class="col-12 visit-card">
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 visit-card__left">
      <h1 v-animate-onscroll="'animated fadeIn'">Контакты</h1>
      <div class="visit-card__adress">
        <p>Грозный, проспект Путина 16</p>
        <p>В будни: 09:00-19:00<br>В выходные: 10:00-18:00</p>
      </div>
      <div class="visit-card__contacts">
        <p>
          <a href="tel:+79298897070"> +7 929 889 70 70 </a>
        </p>
        <p>Здесь будет почта.</p>
      </div>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 visit-card__right">
      <div id="map"><iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.6686335550132!2d45.684440729360944!3d43.32107220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d381cefaf883%3A0x41e41d97f4b602bb!2z0JTQtdGC0YHQutCw0Y8g0J7Qv9GC0LjQutCwINCR0JXQoNCY0JnQnSDQmtCj0KzQl9CT0JDQndCQ0Kg!5e0!3m2!1sru!2sru!4v1648541617424!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  </div>
  </div>
</template>


<style lang="sass">

#map
  width: 100%
  height: 100%
.map
  width: 100%
  height: 100%

.visit-card
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  padding: 40px 70px 80px 70px
  border: 3px solid $primary-pink
  display: flex
  flex-direction: row
  transform: rotate(-3deg)
  border-radius: 10px
  background-color: #fff
  &_wrapper
    background-color: $bg-blue
    border-radius: 10px
  &__left
    display: flex
    flex-direction: column
    transform: rotate(3deg)
  &__adress
    padding: 40px 0
  &__contacts
    color: $primary-pink
    font-weight: 400
  &__right
    transform: rotate(3deg)
  a
    color: $primary-pink

@media screen and (max-width: 767px)
  .visit-card
    border: none
    padding: 0
    &_wrapper
      background-color: #FFF
    &__left
      float: left
    &__right
      position: relative
      top: -140px
      height: 300px
      width: 400px
      left: 200px

@media screen and (max-width: 650px)
  .visit-card
    padding: 0 2vw 0 2vw
    transform: none
    &__left
      transform: none
    &__right
      position: static
      display: block
      margin: 0 auto
      width: 86vw
      transform: none
      height: 400px

</style>