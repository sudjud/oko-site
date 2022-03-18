<template>
  <div class="lenses">
    <div v-animate-onscroll="'animated fadeInLeft'" class="lens">
      <div class="col-4 lens__pic"><img src="../assets/img/empty-pic.jpg" alt=""></div>
      <div class="lens__text">
        <div class="lens__text_title">Прогрессивные линзы</div>
        <div class="lens__text_desc">Прогрессивными называются очки, которые позволяют рассмотреть предметы одинаково четко на различных расстояниях. Достигается это следующим образом: верхняя часть линз рассчитана для дали (ТВ, вождение), а нижняя для чтения вблизи.</div>
      </div>
    </div>
    <div v-animate-onscroll="'animated fadeInRight'"  class="lens">
      <div class="col-4 lens__pic"><img src="../assets/img/empty-pic.jpg" alt=""></div>
      <div class="lens__text">
        <div class="lens__text_title">Бифокальные линзы</div>
        <div class="lens__text_desc">это линзы, которые имеют два разных рецепта: верхняя половина линзы корректирует близорукость, а нижняя половина корректирует дальнозоркость.</div>
      </div>
    </div>
    <div v-animate-onscroll="'animated fadeInLeft'"  class="lens">
      <div class="col-4 lens__pic"><img src="../assets/img/empty-pic.jpg" alt=""></div>
      <div class="lens__text">
        <div class="lens__text_title">Фотохромные линзы</div>
        <div class="lens__text_desc">это линзы для очков, которые прозрачны (или почти прозрачны) в помещении и темнеют при воздействии солнечных лучей. В просторечье такие линзы привыкли называть "хамелеонами".</div>
      </div>
    </div>
    <div v-animate-onscroll="'animated fadeInRight'"  class="lens">
      <div class="col-4 lens__pic"><img src="../assets/img/empty-pic.jpg" alt=""></div>
      <div class="lens__text">
        <div class="lens__text_title">Офисные линзы</div>
        <div class="lens__text_desc">отдельный тип очковых линз, предназначенный для работы на средних и близких дистанциях. При работе в офисе взгляд часто фокусируется на различных расстояниях – на документах, экране монитора, на стене, на лицах коллег.</div>
      </div>
    </div>
    <div v-animate-onscroll="'animated fadeInLeft'"  class="lens">
      <div class="col-4 lens__pic"><img src="../assets/img/empty-pic.jpg" alt=""></div>
      <div class="lens__text">
        <div class="lens__text_title">Водительские линзы</div>
        <div class="lens__text_desc">это линзы, разработанные специально для водителей, чтобы обеспечить максимум комфорта за рулём. Они не только приспосабливаются к условиям освещения, но и устраняют видимые блики, улучшают контрастность цветов в сумерки и другие полезные функции.</div>
      </div>
    </div>
    <div v-animate-onscroll="'animated fadeInRight'"  class="lens">
      <div class="col-4 lens__pic"><img src="../assets/img/empty-pic.jpg" alt=""></div>
      <div class="lens__text">
        <div class="lens__text_title">Астигматические линзы</div>
        <div class="lens__text_desc">Астигматизм – это один из дефектов зрения, вызванный нарушением формы роговицы или хрусталика. Коррекция в этом случае осуществляется с помощью использования специальных астигматических линз. Они бывают как очковыми, так и контактными, которые называются торическими.</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

  .lenses
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 40px 20px
  .lens
    flex-direction: row-reverse
    padding: 20px 20px 20px 20px
    border-radius: 10px
    border: 1px solid $primary-blue
    background-color: rgba($bg-blue, 0.5)
    -webkit-box-shadow: 4px 4px 12px 0px rgba(34, 60, 80, 0.38)
    -moz-box-shadow: 4px 4px 12px 0px rgba(34, 60, 80, 0.38)
    box-shadow: 4px 4px 12px 0px rgba(34, 60, 80, 0.38)
    &__pic
      margin-left: auto
      float: right
      margin: 10px
      align-items: center
      img 
        border-radius: 5px
    &__text
      font-size: $regular-fsz
      align-self: top
      &_title
        font-weight: 500
        color: $primary-pink
      &_desc
        font-size: $small-regular
        font-weight: 400
        padding-top: 10px
        padding-right: 10px

  @media screen and (max-width: 767px)
    .lenses
      grid-template-columns: 1fr

</style>