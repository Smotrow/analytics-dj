<template lang="jade">
  div
    header
      hero-board(:needDetails="true", :bgImg="heroBg")
        div(slot="header")
          h3.weight-3 Ми не даємо відповіді на запитання.
            font.text-primary  Ми відшукуємо справедливість.
        div(slot="content")
          p Перший в
            font.text-primary  Україні
            |  сервіс на основі обчислювального інтелекту, який прогнозує результати рішень судових спорів.
        div(slot="details").run-line
          .title
            p.weight-5 Останні новини |
          .content
            p.weight-3 Analytics передбачив рішення судового спору, яке поставило під питання...
          .link-block
            p.link.text-black.weight-5  Читати далі
    main
      promo-boards(:boards="promoBoards")
</template>

<script>
  import HeroBoard from '../components/boards/HeroBoard.vue'
  import PromoBoards from '../components/boards/PromoBoards.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard,
      [PromoBoards.name]: PromoBoards
    },
    data () {
      return {
        heroBg: 'url(\'/static/img/main-hero.png\')',
        promoBoards: [
          {
            classSize: 'small',
            text: 'Як працює Analytics?',
            mainImg: 'url("/static/img/asset-main-device.png")',
            link: 'how-it-works'
          }, {
            classSize: 'small',
            text: 'Історії користувачів',
            bgImg: 'url("/static/img/asset-main-2.jpg")',
            link: 'stories'
          }, {
            classSize: 'big',
            text: 'Про систему Analytics',
            bgImg: 'url("/static/img/asset-main-1.jpg")',
            link: 'about-system'
          }
        ],
        textMore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Diam' +
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
