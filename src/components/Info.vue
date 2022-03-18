<template>
  <div class="container info">
    <div class="info__blocks">
      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-9 col-11 info__block info__block_1">
        <div class="info__title">
          КАК СДЕЛАТЬ ЗАКАЗ?
        </div>
        <div class="info__text">
          <p>
          Заказы принимаются <span>в любое время</span>, по телефону или в самой оптике.
          </p>
          <p ref="algs">Время ожидания от <span>получаса до 2х недель</span>, в зависимости от сложности рецепта</p>
          <p>По прибытии заказанных линз, наши мастера за 20 минут изготовят для вас очки. Вам остается лишь надеть очки и оценить их качество.</p>
        </div>
        <router-link :to="{path: '/glasses', hash: 'alg'}" class="info__more">Подробнее</router-link>
      </div>
      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-9 col-11 info__block info__block_2">
        <div class="info__title">
          Солнцезащитные очки
        </div>
        <div class="info__text">
        <p>
          В нашей оптике вы найдете солнцезащитные очки от лучших мировых производителей.
        </p>
        <p>Новейшие коллекции Ray Ban, Armani, CARRERA, Porsche design, Maybach, ZILLI, Boss, Jimmy choo и многие другие выставляются в салоне и постоянно обновляются. Так же мы можем заказать любую понравившуюся вам модел по вашему желанию.</p>
        </div>
        <router-link to="/" class="info__more">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(refName) {
    	var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      console.log(top);
      
      window.scrollTo(0, 300);
    }
  }
}
</script>

<style lang="sass">

.info
  &__blocks
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-around
    text-align: justify
  &__block
    padding: 2rem 3rem 0 3rem
    border-radius: 11px
    div
    p
      font-size: $small-regular
      font-weight: 300
    span
      color: $primary-pink
    &_1
      border: 3px solid $primary-blue
    &_2
      border: 3px solid $primary-pink
  &__title
    font-size: $big-regular
    color: $primary-pink
    text-align: left
    height: 2.5em
    text-transform: uppercase
  &__text
    height: 17em
  &__more
    text-transform: uppercase
    transform: rotate(0deg)
    float: right
    border: 3px solid $primary-blue
    padding: 10px
    position: relative
    left: calc(3rem + 3px)
    top: 3px
    border-radius: 11px 0px
    color: $primary-pink
    &:hover
      background-color: $primary-pink
      color: white
    
@media screen and (max-width: 1024px)
  .info
    &__block
      padding-left: 1.5rem
    &__text
      height: 20em

@media screen and (max-width: 991px)
  .info
    &__block
      margin-bottom: 40px
    &__text
      height: 16.5em

@media screen and (max-width: 768px)
  .info
    &__block
      padding: 2rem 1rem 0 1rem
    &__text
      height: 16em
      p
        font-size: 18px
    &__more
      left: calc(1rem + 3px)

@media screen and (max-width: 520px)
  .info
    &__block
      padding: 1rem 1rem 0 1rem
    &__title
      font-size: 20px
      height: 2em
    &__text
      p
        font-size: 15px

@media screen and (max-width: 430px)
  .info
    &__block
      padding: 1rem 0.5rem 0 0.5rem
      transform: rotate(-2deg)
      div
        transform: rotate(2deg)
    &__title
      font-size: 18px
      height: auto
      margin-bottom: 5px
    &__text
      height: 15em
      p
        font-size: 15px
    &__more
      left: calc(0.5rem + 3px)

</style>

