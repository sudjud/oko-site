<template>
  <div class="home">
    <div class="container">
      <div class="home__main">
        <div class="home__main_left">
          <img src="../assets/img/logo.jpg" alt="" />
          <div>Премиальные очки и&nbsp;мед. услуги в&nbsp;Грозном</div>
        </div>
        <div class="home__main_right">
          <img src="../assets/img/home/team.png" alt="" />
        </div>
      </div>
    </div>
    <kinesis-container>
      <div class="home__desc">
        <ParaGlasses
          v-for="(item, idx) in paraData1"
          :key="item.id"
          :data="item"
          :class="{ hidden: contains(hiddenArr, idx) }"
        />
        <div class="home__desc_text_wrap">
          <div class="home__desc_text rellax">
            Око&nbsp;&mdash; это салон оптики, где мы&nbsp;продаем очки, линзы
            и&nbsp;аксессуары к&nbsp;ним. Мы&nbsp;также изготовим для вас рецепт
            любой сложности, а&nbsp;наши мастера в&nbsp;тот&nbsp;же день починят
            ваши очки и&nbsp;любые принадлежности к&nbsp;ним.
          </div>
          <div class="home__desc_text pt10px">
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
    </kinesis-container>
    <CallMe />
    <div class="blue-bg">
      <Info />
    </div>
  </div>
</template>

<script>
import ParaGlasses from "../components/ParaGlasses.vue";
import CallMe from '../components/CallMe.vue'
import Info from '../components/Info.vue'
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
    Info
  },
};
</script>

<style lang="sass">
.home
  &__main
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: 140px
    margin-bottom: 120px

    &_left
      display: flex
      flex-direction: column
      padding-right: 70px
      img
        margin-top: -50px
      div
        font-size: 24px
        line-height: 1.55
        font-weight: 400
        margin-top: 40px

    &_right
      transform: rotate(2deg)

  &__desc
    margin-bottom: 200px
    padding-top: 40px
    &_text
      font-size: 40px
      font-weight: 500
      line-height: 1.5
      margin-top: 80px
      &_wrap
        max-width: calc(100% - 80px)
        margin: 0 auto
        width: 1140px

  @media (max-width: 1200px)
    .hidden
      display: none
</style>
