<template lang="jade">
  div
    header
      hero-board.about-system-hero(:bgImg="heroBg", :needSubstrate="false")
        div(slot="header")
          h3.weight-3 Як побудовано Дом юриста Analytics
        div(slot="content")
          p Інформація, яка
            |  дозволить дізнатися про нашу систему зсередини.
    main
      section#allows-section
        info-boxes(:slides="allowsSlides", :title="'Про Analytics'")
      section#why-section
        slider-full-screen(:slides="whySlides", :title="'Чому Analytics'")
      section#for-who-section
        slider-small(:slides="forWhoSlides", :title="'Для кого?'")
</template>

<script>
  import HeroBoard from '../components/boards/HeroBoard.vue'
  import SliderFullScreen from '../components/sliders/SliderFullScreen.vue'
  import SliderSmall from '../components/sliders/SliderSmall.vue'
  import InfoBoxes from '../components/sliders/InfoBoxes.vue'
  import SlidersData from '../mixins/sliders-data'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard,
      [SliderSmall.name]: SliderSmall,
      [InfoBoxes.name]: InfoBoxes,
      [SliderFullScreen.name]: SliderFullScreen
    },
    mixins: [SlidersData],
    data () {
      return {
        heroBg: 'url("/static/img/about-hero.jpg")'
      }
    }
  }
</script>

<style>
</style>
