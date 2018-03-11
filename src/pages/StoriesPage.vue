<template lang="jade">
  div
    header
      hero-board(:bgImg="heroBg")
        div(slot="header")
          h3.weight-3 Ми не даємо відповіді на запитання.
            font.text-primary  Ми відшукуємо справедливість.
        div(slot="content")
          p.none Перший в
            font.text-primary  Україні
            |  сервіс на основі обчислювального інтелекту, який прогнозує результати рішень судових спорів.
    main
      section.info-section.container-global
        .row
          .col-xs-12.col-sm-9.col-md-6
            p.none.weight-6 {{textMore}}
      demo-stories(:stories="demoStories")
</template>

<script>
  import HeroBoard from '../components/HeroBoard.vue'
  import DemoStories from '../components/DemoStories.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard,
      [DemoStories.name]: DemoStories
    },
    data () {
      return {
        heroBg: 'url("/static/img/stories-hero.jpg")',
        demoStories: [
          {
            id: 1,
            text: 'Як працює Analytics?',
            bgImg: 'url("/static/img/asset-story-1.jpg")'
          }, {
            id: 2,
            text: 'Історії користувачів',
            bgImg: 'url("/static/img/asset-story-2.jpg")'
          }, {
            id: 3,
            text: 'Про систему Analytics',
            bgImg: 'url("/static/img/asset-story-3.jpg")'
          }, {
            id: 4,
            text: 'Про систему Analytics',
            bgImg: 'url("/static/img/asset-story-4.jpg")'
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

<style>
</style>
