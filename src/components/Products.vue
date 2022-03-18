<template>
  <div class="products">
    <div v-animate-onscroll="'animated fadeIn'" class="products__item_left products__item">
      <div class="products__hover_wrap">
        <div class="products__hover"><p>Готовые очки это заводская продукция, они изготавливаются по стандартным параметрам с одинаковыми диоптриями на оба глаза, со стандартным межзрачковым расстоянием 62-64 мм.</p></div>
        <img src="../assets/img/glasses/products/upd/ready.jpeg" alt="" />
      </div>
      <p class="products__item_p bold">Готовые очки</p>
    </div>
    <div v-animate-onscroll="'animated fadeIn'" class="products__item_right products__item">
      <div class="products__hover_wrap">
        <div class="products__hover"><p>Большинство людей испытывает дискомфорт от прямого солнечного света, поскольку на улице человеческий глаз получает гораздо больше света, чем в помещении.</p></div>
      <img src="../assets/img/glasses/products/upd/sun.jpeg" alt="" />
      </div>
      <p class="products__item_p bold">Солнцезащитные очки</p>
    </div>
    <div v-animate-onscroll="'animated fadeIn'" class="products__item_left products__item">
      <div class="products__hover_wrap">
        <div class="products__hover"><p>Успокаивают нервную систему благодаря физиологическому эффекту зеленого цвета, снимают напряжение с глаз, нормализуют внутриглазное давление, защищают вредного влияния ультрафиолета на сетчатку</p></div>
      <img src="../assets/img/glasses/products/upd/glaucom2.jpg" alt="" />
      </div>
      <p class="products__item_p bold">Глаукомные оправы</p>
    </div>
    <div v-animate-onscroll="'animated fadeIn'" class="products__item_right products__item">
      <div class="products__hover_wrap">
        <div class="products__hover"><p>Это оправа из пластика или металла с вставленными в нее вместо привычных линз пластинами, которые изготавливаются из непрозрачного пластика. А в пластинах - отверстия</p></div>
      <img src="../assets/img/glasses/products/upd/trainings.jpg" alt="" />
      </div>
      <p class="products__item_p bold">Очки-тренажеры</p>
    </div>
    <div v-animate-onscroll="'animated fadeIn'" class="products__item_left products__item">
      <div class="products__hover_wrap">
        <div class="products__hover"><p>Реально существующая оптика, разработанная специально для пользователей компьютеров с учетом всех вышеперечисленных особенностей работы за ним.</p></div>
      <img src="../assets/img/glasses/products/upd/computer.jpg" alt="" />
      </div>
      <p class="products__item_p bold">Очки для компьютера и чтения</p>
    </div>
    <div v-animate-onscroll="'animated fadeIn'" class="products__item_right products__item">
      <div class="products__hover_wrap">
        <div class="products__hover"><p>Очки, предназначенные для вождения, способны защитить глаза от яркого света фар рядом проезжающих машин.</p></div>
      <img src="../assets/img/glasses/products/upd/driver.jpeg" alt="" />
      </div>
      <p class="products__item_p bold">Водительские очки</p>
    </div>
  </div>
</template>

<style lang="sass">
.products
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 0px 0px
  grid-template-areas: "..."
  gap: 1em 1em
  margin-top: 80px
  &__item
    position: relative
    &_p
      font-size: $small
  div
    text-align: left
    img
      border-radius: 20px
    p
      padding-left: 5px
      margin-top: 20px
  &__hover
    position: absolute
    width: 100%
    height: 100%
    color: rgba(black, 0)
    background-color: rgba(black, 0)
    border-radius: 20px 
    padding-left: 10px
    &:hover
      color: rgba($bg-pink, 1)
      background-color: rgba(black, 0.5)
      transition-duration: 0.5s
    &_wrap
      position: relative
      padding-bottom: -20px 

@media screen and (max-width: 768px)
  .products
    grid-template-areas: ".."
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
@media screen and (max-width: 660px)
  .products
    grid-template-columns: 1fr
    &__item_right
      justify-self: end
    &__item_left
      justify-self: start
    &__hover
      p
        font-size: 16px
        padding-top: 10px
    div
      p
        margin: 5px 0
</style>