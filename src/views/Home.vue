<template>
  <div class="home">
    <div class="home__main">
      <div class="home__main_left">
        <img src="../assets/img/logo.jpg" alt="">
        <div>Премиальные очки и <br>мед. услуги в Грозном</div>
      </div>
      <div class="home__main_right">
        <img src="../assets/img/home/team.png" alt="">
      </div>
    </div>
    <kinesis-container class="container">
    <div class="home__desc">
      <ParaGlasses
        v-for="item in paraData1"
        :key="item.id"
        :data="item"
      />
      <div class="home__desc_text_wrap">
        
        <div class="home__desc_text rellax">
          Око - это салон оптики, где мы продаем очки, линзы и аксессуары к ним. Мы также изготовим для вас рецепт любой сложности, а наши мастера в тот же день починят ваши очки и любые принадлежности к ним.
        </div>
        <div class="home__desc_text pt10px">
          Мы стараемся показать наглядно, как дороги для нас вы, наши клиенты, посредством ответственной и качественной работы.
        </div>
        <!-- <div v-rellax="{speed: 0.5}">
          I’m slow and smooth
        </div> -->
        <!-- <kinesis-element :strength="40">asdawdawd</kinesis-element> -->
        
      </div>
      <ParaGlasses
        v-for="item in paraData2"
        :key="item.id"
        :data="item"
      />
    </div>
  </kinesis-container>
  </div>
</template>

<script>
import ParaGlasses from '../components/ParaGlasses.vue'
export default {
  data(){
    return {
      paraData1: this.$store.getters.paraData1,
      paraData2: this.$store.getters.paraData2,
    }
  },
  components:{
    ParaGlasses
  }
}
</script>

<style lang="sass">
.home
  &__main
    display: flex
    justify-content: center
    margin-top: 140px
    margin-bottom: 120px
    &_left
      position: relative
      top: 100px
      margin-right: 130px
      img
        width: 300px
        margin-top: -50px
      div
        font-size: 24px
        line-height: 1.55
        font-weight: 400
        margin-top: 40px
    &_right
      transform: rotate(2deg)
      img
        width: 800px
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


</style>
