<template>
  <div class="call-me container">
    <h1 class="call-me__title">Я хочу кое-что спросить...</h1>
    <form v-on:submit.prevent="goTo" class="call-me__form">
      <input v-model="reqName" type="text" class="call-me__input-text" placeholder="Имя" />
      <div class="call-me__tel_wrapper">
      <div>+7</div>
      <input 
        v-model="phone" 
        type="tel"
        autocomplete="tel"
        maxlength="14"
        id="phone"
        pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" 
        required
        v-phone
        placeholder="(938) 123-4567" />
        </div>
      <input type="submit" class="call-me__input-btn" value="Позвоните мне" />
    </form>
  </div>
</template>

<script>
import { getDatabase, push, ref, set } from "firebase/database";
import { getFirestore } from 'firebase/firestore/lite'
import firebase from 'firebase/app'
export default {
  data(){
    return{
      reqName: '',
      phone: ''
    }
  },
  methods:{
    goTo(){
      let db = getDatabase()
      set(ref(db, 'Запросы на звонок/' + this.phone),{
        Name: this.reqName,
        Tel: this.phone
      })
    }
  },
  directives:{
    phone: {
      bind(el){
        el.oninput = function(e){
          if(!e.isTrusted){
            return;
          }
          const x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
          this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
          el.dispatchEvent(new Event('input'));
        }
      }
    }
  }
}
</script>


<style lang="sass">

.call-me
  &__title
    font-weight: 500
  &__form
    padding-top: 50px
    width: 100%
    display: flex
    justify-content: space-between
    input
      padding: 0 20px
      height: 60px
      color: black
      font-size: $small
      line-height: 1.33
      font-family: Rubik
      outline: none
      &[type=text]
        width: 38%
        border: 3px solid $primary-blue
      &[type=submit]
        width: 20%
        height: 60px
        font-weight: 400
        background-color: $primary-pink
        color: white
        border: none
  &__tel_wrapper
    width: 38%
    display: flex
    div
      font-size: $small
      display: flex
      border: 3px solid $primary-blue
      border-right: none
      align-items: center
      padding: 0 20px
      background-color: #EEEEEE
    input
      width: 100%
      border: 3px solid $primary-blue
      border-left: none
      padding-left: 0

@media screen and(max-width: 992px)
  .call-me
    margin: 0 auto
    width: calc(100% - 150px) !important
    &__form
      flex-wrap: wrap
      justify-content: center
      input
        width: 100% !important
        margin-bottom: 15px
        height: 50px
      input[type=submit]
        height: 50px
    &__tel_wrapper
      width: 100%
      div
        height: 50px
      input
        width: 100%

@media screen and(max-width: 576px)
  .call-me
    margin: 0 auto !important
    width: 100%  !important
</style>