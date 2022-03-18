<template>
<div>
  <div class="partnership">
    <div class="partnership__block partnership__block1">
      <div class="partnership__block_wrapper">
        <div>
          <img class="parent-img" src="../assets/img/home/brands/luxottica.jpg"/>
        </div>
        <div class="partnership__subbrands">
          <div>
            <img src="../assets/img/home/brands/luxottica-group/chanel.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/dolce-e-gabbana_0.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/emporio-armani.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/ferrari-logo-griglia.jpg" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/giorgio-armani.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/pradaeyewear-400-griglia.jpg" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/ray-ban.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/versace-griglia.jpg" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/luxottica-group/vogue_400x140.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div class="partnership__block partnership__block2">
      <div class="partnership__block_wrapper">
        <div>
          <img class="parent-img"
            src="../assets/img/home/brands/safilo.jpg" alt=""/>
        </div>
        <div class="salfio partnership__subbrands">
          <div>
            <img src="../assets/img/home/brands/salfio-group/Dsquared2-Logo.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/cardin.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/carrolina-herrera.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/hugo-boss.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/jimmy.png" alt=""/>
          </div>
          <div>
            <img class="levis-img" src="../assets/img/home/brands/salfio-group/levis.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/moschino.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/safilo.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/salfio-group/tommy.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div class="partnership__block partnership__block3">
      <div class="partnership__block_wrapper">
        <div>
          <img class="parent-img" src="../assets/img/home/brands/kering.jpg" alt=""/>
        </div>
        <div class="partnership__subbrands">
          <div>
            <img src="../assets/img/home/brands/kering-group/balenciaga.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/bottega.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/boucheron.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/brioni.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/gucci.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/loren.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/mccqueen.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/ulysse.png" alt=""/>
          </div>
          <div>
            <img src="../assets/img/home/brands/kering-group/pomellato.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="partnership-bottom">
      <img src="../assets/img/home/brands/bentley.png" alt="">
      <img src="../assets/img/home/brands/cartier.png" alt="">
      <img src="../assets/img/home/brands/chopard.png" alt="">
      <img src="../assets/img/home/brands/lunor.svg" alt="">
      <img src="../assets/img/home/brands/maybach.png" alt="">
      <img src="../assets/img/home/brands/zilli.png" alt="">
    </div>
  </div>
</template>

<style lang="sass">

.partnership-bottom
  display: grid 
  grid-auto-columns: 1fr 
  grid-auto-rows: 1fr 
  grid-template-columns: 1fr
  grid-template-rows: 1fr 
  gap: 0em 0em 
  grid-template-areas: ". . . . . ." 
  align-items: center
  column-gap: 40px
  padding-top: 10px
  padding: 10px 50px


.salfio
  border-right: 2px solid black
  border-left: 2px solid black
  padding: 0 1em

.parent-img
  height: 7vw

.partnership
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-auto-columns: 1fr
  grid-auto-rows: 1fr
  grid-auto-flow: row
  width: calc(100% - 80px)
  margin: 0 auto
  border-bottom: 2px solid black
  &__block
    display: grid
    grid-template-columns: 1fr
    grid-auto-columns: 1fr
    grid-auto-rows: 1fr
    gap: 1em 1em
    grid-auto-flow: row
    padding-bottom: 20px
    &_wrapper
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: 1fr 2fr
      gap: 0px 0px
      grid-auto-flow: row
      grid-template-areas: ".""."
      div
        display: grid
        justify-content: center
  &__subbrands
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 0.5fr 0.5fr 0.5fr
    gap: 5px 5px
    grid-auto-flow: row
    grid-template-areas: "...""...""..."
    div
      display: grid
      grid-template-columns: 0.9fr
      justify-content: center
      align-items: center
      padding: 2px
      height: 5vw

@media screen and (max-width: 992px)
  .partnership
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    grid-template-areas: ". .""partnership__block3 partnership__block3"
    &__block3
      grid-template-columns: 0.5fr
      grid-template-rows: 1fr
      grid-template-areas: "."
      justify-content: center
      grid-area: partnership__block3
    &__block3 .partnership__block_wrapper
      border-top: 2px solid black
  .salfio
    border-right: none

@media screen and (max-width: 768px)
  .partnership
    grid-template-columns: 1fr
    grid-template-rows: 1fr 1fr 1fr
    grid-template-areas: "."".""."
    justify-content: center
    &__block
      padding-bottom: 70px
      &3 .partnership__block_wrapper
        border-top: none
      &_wrapper
        grid-template-rows: 0.6fr 2fr
        div
          img
            height: 100px
            object-fit: contain
      &3
        grid-area: auto
        grid-template-columns: 1fr
    &__subbrands
      grid-template-rows: 70px 70px 70px
      align-items: center
      img
        max-height: 45px
        object-fit: contain
  .partnership-bottom
    grid-template-rows: 1fr 1fr
    grid-template-areas: '. . .''. . .'
    gap: 50px

  .salfio
    border-left: none
</style>