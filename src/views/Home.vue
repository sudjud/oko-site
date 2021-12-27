<template>
  <div class="home">
    <kinesis-container>
      <div class="container home__main_wrapper">
        <div class="home__main">
          <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 home__main_left">
            <img class="col-xxl-12 col-xl-12 col-lg-12 col-md-4 col-sm-5 col-7" src="../assets/img/logo.jpg" alt="" />
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-9 col-12 main-desc">Премиальные очки и&nbsp;мед. услуги в&nbsp;Грозном</div>
          </div>
          <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 home__main_right">
            <img class="col-xxl-12 col-xl-12 col-lg-12 col-md-8 col-sm-10 col-12" src="../assets/img/preview.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="home__desc">
        <ParaGlasses
          v-for="(item, idx) in paraData1"
          :key="item.id"
          :data="item"
          :class="{ hidden: contains(hiddenArr, idx) }"
        />
        <div class="home__desc_text_wrap">
          <div class="home__desc_text rellax home__desc_text-a">
            Око&nbsp;&mdash; это салон оптики, где мы&nbsp;продаем очки, линзы
            и&nbsp;аксессуары к&nbsp;ним. Мы&nbsp;также изготовим для вас рецепт
            любой сложности, а&nbsp;наши мастера в&nbsp;тот&nbsp;же день починят
            ваши очки и&nbsp;любые принадлежности к&nbsp;ним.
          </div>
          <div class="home__desc_text home__desc_text-b">
            Мы&nbsp;стараемся показать наглядно, как дороги для нас&nbsp;вы,
            наши клиенты, посредством ответственной и&nbsp;качественной работы.
          </div>
        </div>
        <ParaGlasses
          v-for="(item, idx) in paraData2"
          :key="item.id"
          :data="item"
          :class="{ hidden: contains(hiddenArr, idx) }"
        />
      </div>
      <div class="interblock"></div>
    </kinesis-container>
    <div class="interblock"></div>
    <CallMe />
    <div class="interblock"></div>
    <div class="blue-bg">
      <div class="interblock"></div>
      <Info />
      <div class="interblock"></div>
      <Faq />
    </div>
    <div class="interblock"></div>
    <div class="follow-inst">
      <div class="container">
        <h1 class="follow-inst__title">
          Подписывайтесь на <a target="_blank" href="https://www.instagram.com/optika_oko_95/?hl=ru">@optika_oko_95</a> в инстаграм
        </h1>
        <div class="follow-inst__posts">
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/a.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/b.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/c.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/d.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/e.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/f.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/g.jpg" alt="">
          </div>
          <div class="follow-inst__post">
            <img src="../assets/img/home/inst-posts/h.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="interblock"></div>
    <div class="container">
      <VisitCard />
    </div>
    <div class="interblock"></div>
  </div>
</template>

<script>
import ParaGlasses from "../components/ParaGlasses.vue";
import CallMe from '../components/CallMe.vue'
import Info from '../components/Info.vue'
import Faq from '../components/Faq.vue'
import VisitCard from '../components/VisitCard.vue'
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
      paraData1: this.$store.getters.paraData1,
      paraData2: this.$store.getters.paraData2,
      width: window.innerWidth,
      hiddenArr: [1, 2, 4, 5, 7, 8, 10],
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    contains(arr, elem) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
          return true;
        }
      }
      return false;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  components: {
    ParaGlasses,
    CallMe,
    Info,
    Faq,
    VisitCard,
    Footer
  },
};
</script>

<style lang="sass">
.home
  &__main
    display: flex
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
      transform: rotate(2deg)

  &__desc
    &_text
      font-size: $big-fsz
      font-weight: 500
      line-height: 1.5
      padding-top: 35px
      &-a
        padding-top: 120px
      &-b
        padding-bottom: 80px
      &_wrap
        max-width: calc(100% - 80px)
        margin: 0 auto
        width: 1140px

  @media (max-width: 1200px)
    .hidden
      display: none


.follow-inst
  &__title
    width: 70%
    padding-bottom: 50px
    a:hover
      color: $primary-blue
  &__posts
    display: grid
    grid-template-columns: repeat(4, 1fr) 
    grid-column-gap: 10px
    grid-row-gap: 5px

@media screen and(max-width: 992px)
  .home__main 
    margin-top: 0
    text-align: center
    align-items: start
    padding-top: 40px
    &_wrapper
      align-items: baseline
    &_left
      padding-right: 0
      padding-bottom: 50px
      img
        margin: 0 auto
      div
        margin: 0 auto

</style>
