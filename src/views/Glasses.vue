<template>
  <div class="glasses">
    <div class="pink-bg">
      <div class="container">
        <div class="glasses__main_wrapper">
          <div class="glasses__main">
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 glasses__main_left">
              <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 main-title">Очки и линзы</div>
              <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-9 col-sm-9 col-12 main-desc glasses__title_desc">Много брендов. Много видов. Все ценовые категории. Для взрослых и&nbsp;детей. <br>Всё для ваших глаз</div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 glasses__main_right">
              <img class="col-xxl-12 col-xl-12 col-lg-12 col-md-8 col-sm-7 col-8" src="../assets/img/glasses/jimmy-choo.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="interblock"></div>
        <div class="glasses__algorithm">
          <h1 id="algorithm" class="prim-blue glasses__algorithm_title">Как заказать очки?</h1>
          <p class="glasses__algorithm_desc col-12">Все очень просто. Мы&nbsp;можем выписать вам рецепт, и&nbsp;если нет нужных линз, мы&nbsp;их&nbsp;закажем и&nbsp;они будут у&nbsp;вас максимум через две недели</p>
          <AlgorithmBlock />
        </div>
      </div>
      <div class="interblock"></div>
    </div>
    <div class="interblock"></div>
    <CallMe />
    <div class="interblock"></div>
    <div class="container">
      <h1>Что мы продаем</h1>
      <p class="col-9">
        Вы найдете у нас все, что нужно вашим глазам
      </p>
      <Products />
    </div>
    <div class="interblock"></div>
    <div class="container">
      <h1>Фото</h1>
      <p class="col-12">К&nbsp;сожалению, на&nbsp;нашем сайте пока нет возможности посмотреть все товары. Но&nbsp;мы&nbsp;понимаем, как сложно выбрать&nbsp;то, что вам подходит. Поэтому, здесь вы&nbsp;можете посмотреть фото разных оправ и&nbsp;аксессуаров. Если что, вы&nbsp;можете спросить у&nbsp;нас, есть&nbsp;ли у&nbsp;нас в&nbsp;наличии&nbsp;то, что вам нужно</p>
      
    </div>
    <Tabs />
    <div class="interblock"></div>
    <div class="container"><VisitCard /></div>
    
    <div class="interblock"></div>
  </div>
</template>

<script>
import AlgorithmBlock from '../components/Algs/AlgorithmBlock.vue'
import CallMe from '../components/CallMe.vue'
import Tabs from '../components/PhotoTabs/Tabs.vue'
import Products from '../components/Products.vue'
import VisitCard from '../components/VisitCard.vue'

export default {
  components:{
    AlgorithmBlock,
    CallMe,
    Tabs,
    Products,
    VisitCard
  }
}
</script>

<style lang="sass">

.glasses
  &__main
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    align-items: center
    margin-top: -80px
    &_wrapper
      height: 100vh
      display: flex
      align-items: center
    &_left
      display: flex
      flex-direction: column
      padding-right: 70px
    &_right
      transform: rotate(-4deg)
      border: 3px solid $primary-blue
      border-radius: 10px
      img
        border-radius: 10px
        transform: rotate(7deg)


@media screen and(max-width: 992px)
  .glasses__main 
    margin-top: 0
    text-align: center
    align-items: center
    padding-top: 40px
    flex-wrap: wrap
    justify-content: center
    &_wrapper
      align-items: center
    &_left
      padding-right: 0
      padding-bottom: 50px
      img
        margin: 0 auto
      div
        margin: 0 auto
    &_right
      border: none

</style>