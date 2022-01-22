<template> 
  <footer class="footer">
    <div class="footer__block_wrapper footer__block_wrapper1">
      <div class="footer__logo">
        <img src="../assets/img/logo.jpg" alt="">
      </div>
      <div class="footer__c">
        © 1998-2021 ООО "Оптика ОКО"
      </div>
    </div>

    <div class="footer__block_wrapper footer__block_wrapper2">
      <div class="footer__title">Переходы</div>
      <Navigation :className="'footer'" />
    </div>


    <div class="footer__block_wrapper footer__block_wrapper3">
      <div class="footer__title">
        О работе
      </div>
      <div class="footer__items">
        <div class="footer__item"><router-link to="/">О нашей команде</router-link></div>
        <div class="footer__item"><router-link to="/">Хочу в команду!</router-link></div>
        <div class="footer__item"><router-link to="/">Сотрудничество</router-link></div>
        <div class="footer__item"><router-link to="/">Политика возврата<br> и отмены заказа</router-link></div>
      </div>
    </div>


    <div class="footer__block_wrapper footer__block_wrapper4">
      <div class="footer__title">Связь с нами</div>
      <div class="footer__items">
        <div class="footer__item"><a href="https://www.instagram.com/optika_oko_95/?hl=ru" class="footer_item">Инстаграм</a></div>
        <div class="footer__item"><a href="tel:+79298897070" class="footer__phone-number">+7 929 889 70 70</a></div>
      </div>
    </div>
    
  </footer>
</template>

<script>
import Navigation from './Navs/Navigation.vue'
export default {
  components:{
    Navigation
  }
}
</script>

<style lang="sass">

.footer
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-template-rows: 1fr
  gap: 0px 0px
  grid-auto-flow: row
  grid-template-areas: ". . . ."
  justify-items: center
  color: #adadad
  font-size: $small
  line-height: 1.55
  font-weight: 300
  padding-bottom: 70px
  width: 100%
  &__logo
    width: 12vmax
  &__c
    align-self: center
  &__title
    text-transform: uppercase
    font-weight: 500
  a
    color: #adadad
  &__item
    padding-top: 10px
  &__block_wrapper
    min-width: 170px

.footer__block_wrapper1
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr
  gap: 0px 0px
  grid-template-areas: ".""."
  justify-self: center

@media screen and (max-width: 767px)
  .footer
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    gap: 0px 0px
    grid-template-areas: ". ."". ."
    justify-items: end

</style>