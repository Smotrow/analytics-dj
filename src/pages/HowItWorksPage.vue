<template lang="jade">
  div
    header
      hero-board.how-it-works-hero(:bgImg="hero.bg", :needSubstrate="false")
        div(slot="header")
          h3.weight-3 {{hero.title}}
        div(slot="content")
          p.none  {{hero.text}}
        div(slot="footer")
          a.btn.btn-primary-bright Розпочати
          router-link.btn.btn-primary-bright.inverse( :to="{name: 'Main'}") На головну
    main
      section#how-it-work-section.container-global
        .header
          p.weigth-6.title Як працює система
        .content
          .step( v-for="(step,index) in steps")
            .step-head
              .step-line
              .step-icon {{index+1}}
            .step-main {{step.text}}
      section#about-section.container-global
        .text-block
          p.none {{aboutText}}
        .img-block
          img(src="/static/img/asset-how-laptop.png")
</template>

<script>
  import HeroBoard from '../components/boards/HeroBoard.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard
    },
    data () {
      return {
        hero: {
          title: 'Як працює Analytics?',
          text: 'Що таке обчислювальний інтелект, які  механізми ми' +
          ' використовуємо та як бути впевненим, що системі можна довіряти?',
          bg: 'url("/static/img/how-hero.jpg")'
        },
        aboutText: 'Analytics працює на основі обчислювального' +
        ' інтелекту. Він збирає інформацію з відкритих даних,' +
        ' аналізуючи судову практику, минулі схожі справи, а також' +
        ' отримуючи відповідні дані з законодавства України. Його' +
        ' висновки формуються на основі аналізу великого масиву інформації,' +
        ' а тому точніші, ніж  за наслідком досліджень звичайних людей.' +
        ' Машина не  може помилитися. Це – майбутнє судової системи' +
        ' в Україні. ',
        steps: [
          {
            id: 1,
            text: 'Користувач заходить до системи та обирає потрібну' +
            ' категорію справ, в якій в нього виникла проблема.'
          }, {
            id: 2,
            text: 'Після чого наша система почне задавати питання, на які' +
            ' потрібно відповісти користувачеві. Відповідаючи на них,' +
            ' система буде автоматично аналізувати відповіді та збирати' +
            ' інформацію для підготовки висновку.'
          }, {
            id: 3,
            text: 'Як тільки Analytics збере достатньо інформації' +
            ' для формування висновку,  вона автоматично перестане задавати' +
            ' нові питання і сформує готовий результат.'
          }, {
            id: 4,
            text: 'В кінці користувач отримає результат того, яке' +
            ' законне рішення повинен винести суддя. Висновок від' +
            ' Analytics можна прикріпити до матеріалів справи та' +
            ' направити до суду. Користувач також може обрати більш' +
            ' розгорнутий висновок за додаткову плату.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
