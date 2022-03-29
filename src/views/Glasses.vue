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
        <a name="alg"/>
        <div class="interblock"></div>
        
      </div>
      <div class="container">
        <div class="glasses__algorithm">
          <h1 v-animate-onscroll="'animated fadeIn'" class="prim-blue glasses__algorithm_title">Как заказать очки?</h1>
          <p class="glasses__algorithm_desc col-12">Все очень просто. Мы&nbsp;можем выписать вам рецепт, и&nbsp;если нет нужных линз, мы&nbsp;их&nbsp;закажем и&nbsp;они будут у&nbsp;вас максимум через две недели</p>
        </div>
      </div>
      <AlgorithmBlock/>

      <div class="interblock"></div>
    </div>
    <div class="interblock"></div>
    <CallMe />
    <div class="interblock"></div>
    <div class="container">
      <h1 v-animate-onscroll="'animated fadeIn'">Очки</h1>
      <p class="col-9">
        У нас представлены очки всех видов: пластиковые, металлические оправы. Разной ценовой категории.
      </p>
      <small v-if="isTouchDevice">Тапните, чтобы увидеть описание</small>
      <small v-if="!isTouchDevice">Наведите, чтобы увидеть описание</small>
      <Products />
    </div>
    <div class="interblock"></div>
    <div class="container">
      <h1 v-animate-onscroll="'animated fadeIn'">Немного о линзах для очков</h1>
      <p class="col-9">В нашем ассортименте имеются линзы от ведущих мировых производителей</p>
      <div class="interhalf"></div>
      <LensesBrands />
      <div class="interhalf"></div>
      <p class="col-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ex aliquid ea beatae atque vitae. Dolorem est mollitia recusandae repellat!</p>
      <div class="interhalf"></div>
      <Lenses />
      <div class="interblock"></div>
    </div>
    <div class="container">
      <h1>Контактные линзы</h1>
      <div class="interhalf"></div>
      <p><span style="color: #86BEDD;">Acuvue Oasys</span> - контактные линзы марки <span style="color: #86BEDD;">Acuvue Oasys</span> с технологией HYDRACLEAR PLUS активизируют работу слезной пленки, чтобы уменьшить ощущение усталости глаз.</p>
      <p><span style="color: #4CA3D9">Acuvue TruEye</span> - линзы <span style="color: #4CA3D9">Acuvue TruEye</span> могут обеспечить комфорт тем людям, которые носят линзы интенсивно.</p>
      <p><span style="color: #009EDE">Acuvue Moist</span> - контактные линзы ежедневной замены, которые могут обеспечить комфорт и предотвратить раздражение глаз.</p>
      <p><span style="color: #93C548">Optima</span> - эти контактные линзы совсем не дорогие, но в то же время обеспечивают высокое качество зрения. Они практически не ощущаются на глазах благодаря ультратонким краям.</p>
      <p><span style="color: #C83B26">Proclear</span> - они сделаны с применением технологии PC Technology™, благодаря которой вода притягивается к вашим линзам, помогая им оставаться чистыми и комфортными в течение всего дня.</p>
      <p>Ну и наконец, <span style="color:#F3E500">ц</span><span style="color:#FAC70C">в</span><span style="color:#F28E1C">е</span><span style="color:#E96220">т</span><span style="color:#E32322">н</span><span style="color:#E32322">ы</span><span style="color:#6D398B">е</span> <span style="color:#454E99">л</span><span style="color:#2A71AF">и</span><span style="color:#0696BB">н</span><span style="color:#008F5A">з</span><span style="color:#8DBB25">ы</span> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, iste!</p>
      <div class="interblock"></div>
      
    </div>
    <div class="container">
      <h1 v-animate-onscroll="'animated fadeIn'">Фото</h1>
      <p class="col-12">К&nbsp;сожалению, на&nbsp;нашем сайте пока нет возможности посмотреть все товары. Но&nbsp;мы&nbsp;понимаем, как сложно выбрать&nbsp;то, что вам подходит. Поэтому, здесь вы&nbsp;можете посмотреть фото разных оправ и&nbsp;аксессуаров. Если что, вы&nbsp;можете спросить у&nbsp;нас, есть&nbsp;ли у&nbsp;нас в&nbsp;наличии&nbsp;то, что вам нужно</p>
      
    </div>
    <Tabs />
    <div id="#jakor" class="interblock"></div>
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
import Lenses from '../components/Lenses.vue'
import LensesBrands from '../components/LensesBrands.vue'


export default {
  components:{
    AlgorithmBlock,
    CallMe,
    Tabs,
    Products,
    VisitCard,
    Lenses,
    LensesBrands
  },
  computed: {
    isTouchDevice(){
      return typeof window.ontouchstart !== 'undefined';
    }
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
      border: 2px solid $primary-blue
      border-radius: 10px
      img
        border-radius: 5px


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