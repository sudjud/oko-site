<template>
  <div class="products">
    <div class="products__item">
      <img src="../assets/img/glasses/products/rim.jpeg" alt="">
      <p class="bold">Оправы</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/glasses.jpeg" alt="">
      <p class="bold">Очки для зрения</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/sunglasses.jpeg" alt="">
      <p class="bold">Солнцезащитные очки</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/read.jpeg" alt="">
      <p class="bold">Очки для компьютера и чтения</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/lenses.jpeg" alt="">
      <p class="bold">Линзы для очков</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/contactlenses.jpeg" alt="">
      <p class="bold">Контактные линзы</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/forlenses.jpeg" alt="">
      <p class="bold">Все необходимое для линз</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/accessories.jpeg" alt="">
      <p class="bold">Аксессуары</p>
    </div>
    <div class="products__item">
      <img src="../assets/img/glasses/products/children.jpg" alt="">
      <p class="bold">Для детей</p>
    </div>
  </div>
</template>

<style lang="sass">

.products
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr 1fr
  gap: 0px 0px
  grid-template-areas: ". . ."
  gap: 1em 1em
  margin-top: 80px
  &__item
    position: relative
  div
    text-align: left
    img
      border-radius: 20px
      margin-bottom: 20px
    p
      padding-left: 5px
    p:last-child
      font-size: $small
  &__desc
    position: absolute
    visibility: hidden
    background: rgba(#ffffff, 0.6)
    height: 100%
    width: 100%
    border-radius: 20px
    z-index: 100
  
@media screen and (max-width: 768px)
  .products
    grid-template-areas: ". ."
    grid-template-columns: 1fr 1fr 
    grid-template-rows: 1fr 1fr

</style>