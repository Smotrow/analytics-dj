<template lang="jade">
  div
    header
      hero-board.about-system-hero(:bgImg="heroBg", :needSubstrate="false")
        div(slot="header")
          h3.weight-3 Ми не даємо відповіді на запитання.
        div(slot="content")
          p.none Перший в Україні
            |  сервіс на основі обчислювального інтелекту, який прогнозує результати рішень судових спорів.
    main
      section#allows-section
        info-boxes(:slides="fullSlides", :title="'Analytics Allows'")
      section#why-section
        slider-full-screen(:slides="fullSlides", :title="'About Analytics'")
      section#for-who-section
        slider-small(:slides="fullSlides", :title="'Для кого?'")
</template>

<script>
  import HeroBoard from '../components/HeroBoard.vue'
  import SliderFullScreen from '../components/sliders/SliderFullScreen.vue'
  import SliderSmall from '../components/sliders/SliderSmall.vue'
  import InfoBoxes from '../components/InfoBoxes.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard,
      [SliderSmall.name]: SliderSmall,
      [InfoBoxes.name]: InfoBoxes,
      [SliderFullScreen.name]: SliderFullScreen
    },
    data () {
      return {
        heroBg: 'url("/static/img/about-hero.jpg")',
        fullSlides: [
          {
            id: 1,
            title: 'Test1',
            text: 'Як працює Analytics?',
            bgImg: '/static/img/asset-story-1.jpg'
          }, {
            id: 2,
            title: 'Test2',
            text: 'Історії користувачів',
            bgImg: '/static/img/asset-story-2.jpg'
          }, {
            id: 3,
            title: 'Test3',
            text: 'Про систему Analytics',
            bgImg: '/static/img/asset-story-3.jpg'
          }, {
            id: 4,
            title: 'Test3',
            text: 'Про систему Analytics',
            bgImg: '/static/img/asset-story-3.jpg'
          }, {
            id: 5,
            title: 'Test3',
            text: 'Про систему Analytics',
            bgImg: '/static/img/asset-story-3.jpg'
          }, {
            id: 6,
            title: 'Test3',
            text: 'Про систему Analytics',
            bgImg: '/static/img/asset-story-3.jpg'
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
