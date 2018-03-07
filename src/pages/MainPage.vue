<template lang="jade">
  div
    header
      hero-board(:needDetails="true")
        div(slot="header")
          h3 {{textLess}}
            font.text-primary  Lorem ipsum dolor
        div(slot="content")
          p.none {{textMore}}
        div(slot="details")
          p.none {{textLess}}
            a.link.text-black  Lorem ipsum dolor
    main
      promo-boards(:boards="promoBoards")
      p( v-for="n in 11") {{ n }} stories
</template>

<script>
  import HeroBoard from '../components/HeroBoard.vue'
  import PromoBoards from '../components/PromoBoards.vue'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard,
      [PromoBoards.name]: PromoBoards
    },
    data () {
      return {
        promoBoards: [
          {
            classSize: 'small',
            text: 'Lorem ipsum dolor sit amet.',
            mainImg: 'url("/static/img/asset-main-device.png")',
            link: 'main'
          }, {
            classSize: 'small',
            text: 'Lorem ipsum dolor sit amet.',
            bgImg: 'url("/static/img/asset-main-2.jpg")',
            link: 'main'
          }, {
            classSize: 'big',
            text: 'Lorem ipsum dolor sit amet.',
            bgImg: 'url("/static/img/asset-main-1.jpg")',
            link: 'main'
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
