<template lang="jade">
  div
    header
      hero-board(:bgImg="hero.bg")
        div(slot="header")
          h3.weight-3 Як Analytics змінює є,
            font.text-primary  де ми знаходимось
        div(slot="content")
          p.none {{hero.text}}
    main
      section.info-section
        .container-global
          .row
            .col-xs-12.col-sm-9.col-md-6
              p.none.weight-6 {{textInfo}}
      demo-stories(:stories="demoStories")
</template>

<script>
  import HeroBoard from '../components/boards/HeroBoard.vue'
  import DemoStories from '../components/stories/DemoStories.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard,
      [DemoStories.name]: DemoStories
    },
    data () {
      return {
        hero: {
          title: 'Як Analytics змінює є, де ми знаходимось',
          text: 'Історії людей та компаній, які  випробували прогнозування системи.',
          bg: 'url("/static/img/stories-hero.jpg")'
        },
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
        textInfo: 'Наша місія - створити доступне правосуддя для кожної' +
        ' людини в Україні. І тільки реальні  історії доводять, що ми ' +
        'робимо це не дарма.'
      }
    }
  }
</script>

<style>
</style>
