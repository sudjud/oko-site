<template>
  <div class="visit-card_wrapper">
  <div class="col-12 visit-card">
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 visit-card__left">
      <h1>Контакты</h1>
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
      <div id="map" class=" visit-card__map basemap">
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import mapboxgl from "/node_modules/mapbox-gl/dist/mapbox-gl";

export default {

  name: "BaseMap",
  data() {
    return {
      accessToken: 'pk.eyJ1Ijoic3VkanVkIiwiYSI6ImNrd20ycm5wMjI3dTkycG1qdmcyb3B1NGUifQ.Sff6_jEXs6eZSUK5GXm94A',
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;
    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [45.685018, 43.321053],
      zoom: 16,
    });
  },
  
}
</script>

<style lang="sass">

.basemap
  width: 100%
  height: 80%

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
    display: flex
    align-items: flex-end
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
  .basemap

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