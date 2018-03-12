<template lang="jade">
  div
    header
      hero-board.how-it-works-hero(:bgImg="heroBg", :needSubstrate="false")
        div(slot="header")
          h3.weight-3 Ми не даємо відповіді на запитання.
        div(slot="content")
          p.none Перший в
            font.text-primary  Україні
            |  сервіс на основі обчислювального інтелекту, який прогнозує результати рішень судових спорів.
        div(slot="footer")
          a.btn.btn-primary-bright Розпочати
          router-link.btn.btn-primary-bright.inverse( :to="{name: 'Main'}") На головну
    main
      section#how-it-work-section.container-global
        .header
          p.weigth-6.title Start
        .content
          .step( v-for="(step,index) in steps")
            .step-head
              .step-line
              .step-icon {{index+1}}
            .step-main {{step.text}}
      section#about-section.container-global
        .text-block
          p.none {{textMore}}
        .img-block
          img(src="/static/img/asset-how-laptop.png")
</template>

<script>
  import HeroBoard from '../components/HeroBoard.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard
    },
    data () {
      return {
        heroBg: 'url("/static/img/how-hero.jpg")',
        steps: [
          {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.'
          }, {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.'
          }, {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.'
          }, {
            id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
            'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.'
          }
        ],
        textMore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.',
        textLess: 'Lorem ipsum dolor sit amet. '
      }
    }
  }
</script>

<style lang="scss">
</style>
