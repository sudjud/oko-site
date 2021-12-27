<template>
  <div class="products">
    <div class="products__item1">
      <img src="../assets/img/glasses/products/rim.jpeg" alt="">
      <p class="bold">Оправы</p>
      <p>У нас есть оправы всех ценовых категорий и всех видов. Вы, однозначно, найдете то, что вам подойдет</p>
    </div>
    <div class="products__item2">
      <img src="../assets/img/glasses/products/glasses.jpeg" alt="">
      <p class="bold">Очки для зрения</p>
      <p>Вы можете посмотреть и подобрать готовые очки для зрения. Часто бывает так, что клиент находит на витрине то, что ему сразу подходит</p>
    </div>
    <div class="products__item3">
      <img src="../assets/img/glasses/products/sunglasses.jpeg" alt="">
      <p class="bold">Солнцезащитные очки</p>
      <p>Первостепенная функция солнцезащитных очков заключается в том, что они должны защищать ваши глаза от солнечного света и ультрафиолетовых лучей. У нас нет некачественных очков, которые будут вредны для ваших глаз. Это наша принципиальная позиция</p>
    </div>
    <div class="products__item4">
      <img src="../assets/img/glasses/products/read.jpeg" alt="">
      <p class="bold">Очки для компьютера и чтения</p>
      <p>Читайте книги и идите в ногу со временем! Вот вам наш совет</p>
    </div>
    <div class="products__item5">
      <img src="../assets/img/glasses/products/lenses.jpeg" alt="">
      <p class="bold">Линзы для очков</p>
      <p>Для коррекции миопии, гиперметропии, пресбиопии, косоглазия. Также астигматические линзы, линзы для чтения и прогрессивные линзы. Материалы: полимерные и стеклянные. Дизайн: сферические, асферические и индивидуальные на заказ.</p>
    </div>
    <div class="products__item6">
      <img src="../assets/img/glasses/products/contactlenses.jpeg" alt="">
      <p class="bold">Контактные линзы</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus aperiam dolorem numquam adipisci architecto dolorum, temporibus odio accusantium velit.</p>
    </div>
    <div class="products__item7">
      <img src="../assets/img/glasses/products/forlenses.jpeg" alt="">
      <p class="bold">Все необходимое для линз</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique, nemo qui doloremque unde quaerat? Ut nobis libero iste debitis!</p>
    </div>
    <div class="products__item8">
      <img src="../assets/img/glasses/products/accessories.jpeg" alt="">
      <p class="bold">Аксессуары</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto modi magnam voluptatem atque facere voluptate adipisci labore sunt dolore.</p>
    </div>
    <div class="products__item9">
      <img src="../assets/img/glasses/products/children.jpg" alt="">
      <p class="bold">Для детей</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum architecto tempora praesentium facilis nisi molestias provident, at a ad?</p>
    </div>
  </div>
</template>

<style lang="sass">

.products
  display: grid
  grid-template-columns: repeat(3, 0.5fr)
  grid-template-rows: repeat(3, 1fr)
  grid-column-gap: 90px
  grid-row-gap: 30px
  margin-top: 80px
  div
    text-align: left
    img
      border-radius: 20px
      margin-bottom: 20px
    p
      padding-left: 5px
    p:last-child
      font-size: $small
  &__item1
    grid-area: 1 / 1 / 2 / 2
  &__item2
    grid-area: 1 / 2 / 2 / 3
  &__item3
    grid-area: 1 / 3 / 2 / 4
  &__item4
    grid-area: 2 / 1 / 3 / 2
  &__item5
    grid-area: 2 / 2 / 3 / 3
  &__item6
    grid-area: 2 / 3 / 3 / 4
  &__item7
    grid-area: 3 / 1 / 4 / 2
  &__item8
    grid-area: 3 / 2 / 4 / 3
  &__item9
    grid-area: 3 / 3 / 4 / 4

</style>