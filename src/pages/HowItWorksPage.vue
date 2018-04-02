<template lang="jade">
  div
    header
      hero-board.how-it-works-hero(:bgImg="hero.bg", :needSubstrate="false")
        div(slot="header")
          h3.weight-3 {{hero.title}}
        div(slot="content")
          p  {{hero.text}}
        div(slot="footer")
          router-link.btn.btn-primary-bright(:to="{ name: 'WorkPanel' }") Розпочати
          router-link.btn.btn-primary-bright.inverse( :to="{name: 'Main'}") На головну
    main
      section#how-it-work-section.container-global
        .header
          p.weight-6.title Як працює система
        .content
          .step( v-for="(step,index) in steps")
            .step-head
              .step-line
              .step-icon
                p.weight-6 {{index+1}}
            .step-main
              p {{step.text}}
      section#about-section.container-global
        .text-block
          p {{aboutText}}
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
          text: 'Що таке обчислювальний інтелект, які  механізми він' +
          ' використовує та як бути впевненим, що системі можна довіряти?',
          bg: 'url("/static/img/how-hero.jpg")'
        },
        aboutText: 'Analytics працює на основі обчислювального' +
        ' інтелекту. Він збирає інформацію з відкритих даних,' +
        ' аналізує судову практику, минулі схожі справи, а також' +
        ' отримує відповідні дані з законодавства України. Його' +
        ' висновки формуються на основі аналізу великого масиву інформації,' +
        ' а тому вони є точнішими за дослідження звичайних людей.' +
        ' Машина майже ніколи не помиляється. Це – майбутнє судової системи' +
        ' в Україні. ',
        steps: [
          {
            id: 1,
            text: 'Користувач заходить до системи та обирає потрібну' +
            ' категорію справ, в якій у нього виник спір.'
          }, {
            id: 2,
            text: 'Analytics почне задавати питання, на які' +
            ' потрібно відповісти користувачеві. Відповідаючи на них,' +
            ' система буде автоматично аналізувати відповіді та збирати' +
            ' інформацію для підготовки висновку.'
          }, {
            id: 3,
            text: 'Як тільки Analytics збере достатньо інформації' +
            ' для формування висновку,  він автоматично перестане задавати' +
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
