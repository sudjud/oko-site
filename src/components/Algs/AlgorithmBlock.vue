<template>
  <div class="algorithm-block container">
    <Algorithm 
      v-for="item in algorithmData"
      :key="item.id"
      :data="item"
    />
  </div>
</template>


<script>
import Algorithm from './Algorithm.vue'
import recipe from '../../assets/img/glasses/recipe.png'
import rim from '../../assets/img/glasses/rim.png'
import adviser from '../../assets/img/glasses/adviser.png'
import made from '../../assets/img/glasses/made.png'
import tryGlasses from '../../assets/img/glasses/tryGlasses.png'
export default {
  components:{
    Algorithm
  },
  data(){
    return{
      algorithmData:[
        {
          id: 1,
          title: 'Получить рецепт очков',
          desc: 'Рецепт очков вам выпишет наш врач-офтальмолог, либо же можете получить его в поликлинике и принести',
          imgSrc: recipe
        },
        {
          id: 2,
          title: 'Выбрать оправу',
          desc: 'Огромный ассортимент позволит вам выбрать то, что максимально подходит вам. Цены начинаются от 700 рублей',
          imgSrc: rim
        },
        {
          id: 3,
          title: 'Подобрать линзы',
          desc: 'Консультант подбирает подходящие вам линзы на основе рецепта, ваших желаний и потребностей',
          imgSrc: adviser
        },
        {
          id: 4,
          title: 'Получить готовые очки',
          desc: 'Срок ожидания выдачи готовых очков зависит от сложности вашего рецепта. Это займет 30 минут, если рецепт простой. Если же рецепт сложный, то мы заказываем у зарубежного производителя линзы для вас. Нужно будет подождать максимум две недели',
          imgSrc: made
        },
        {
          id: 5,
          title: 'Примерка',
          desc: 'По прибытии заказанных линз, наши мастера за 20 минут изготовят для вас очки. Вам остается лишь надеть очки и оценить их качество. Мы рассматриваем все жалобы и решаем их в пользу клиента',
          imgSrc: tryGlasses
        },
      ]
    }
  }
}
</script>