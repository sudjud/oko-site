<template>
  <div class="glasses">
    <div class="pink-bg">
      <div class="container">
        <div class="glasses__main">
          <div class="glasses__main_left">
            <div class="main-title">Очки и линзы</div>
            <div class="main-desc glasses__title_desc">Много брендов. Много видов. Все ценовые категории. Для взрослых и&nbsp;детей. <br>Все для ваших глаз</div>
          </div>
          <div class="glasses__main_right">
            <img src="../assets/img/glasses/jimmy-choo.jpg" alt="" />
          </div>
        </div>
        <div class="glasses__algorithm">
          <h1 class="prim-blue glasses__algorithm_title">Как заказать очки?</h1>
          <p class="glasses__algorithm_desc col-8">Все очень просто. Мы&nbsp;можем выписать вам рецепт, и&nbsp;если нет нужных линз, мы&nbsp;их&nbsp;закажем и&nbsp;они будут у&nbsp;вас максимум через две недели</p>
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
      <p class="col-9">К&nbsp;сожалению, на&nbsp;нашем сайте пока нет возможности посмотреть все товары. Но&nbsp;мы&nbsp;понимаем, как сложно выбрать&nbsp;то, что вам подходит. Поэтому, здесь вы&nbsp;можете посмотреть фото разных оправ и&nbsp;аксессуаров. Если что, вы&nbsp;можете спросить у&nbsp;нас, есть&nbsp;ли у&nbsp;нас в&nbsp;наличии&nbsp;то, что вам нужно</p>
      <div class="interblock"></div>
      
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
    align-items: center
    height: calc(100vh + 80px)
    margin-top: -80px
    &_left
      display: flex
      flex-direction: column
      padding-right: 70px
      width: 55%
    &_right
      transform: rotate(2deg)
      width: 520px
      img
        border-radius: 10px

</style>