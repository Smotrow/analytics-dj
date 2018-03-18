<template lang="jade">
  div
    header
      hero-board(:needDetails="true", :bgImg="heroBg")
        div(slot="header")
          h3.weight-3 Ми не даємо відповіді на запитання.
            font.text-primary  Ми відшукуємо справедливість.
        div(slot="content")
          p.none Перший в
            font.text-primary  Україні
            |  сервіс на основі обчислювального інтелекту, який прогнозує результати рішень судових спорів.
        div(slot="details").run-line
          .title
            p.none.weight-5 Останні новини |
          .content
            p.none.weight-3 Analytics передбачив рішення судового спору, яке поставило під питання...
          .link-block
            p.none.link.text-black.weight-5  Читати далі
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
  .run-line {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    .title {
      position: absolute;
      left: 0;
    }
    .content {
      width:100%;
      white-space:nowrap;
      overflow:hidden;
      display: inline-block;
      margin: 0 100px 0 145px;
      p {
        display:inline-block;
        padding-left:100%;
        -webkit-animation: marquee 10s infinite linear;
        animation: marquee 10s infinite linear;
      }
    }
    .link-block {
      position: absolute;
      right: 0;
    }
  }
  .marquee{
    width:100%;
    white-space:nowrap;
    overflow:hidden;
  }

  .marquee span {
    display:inline-block;
    padding-left:100%;
    -webkit-animation: marquee 10s infinite linear;
    animation: marquee 10s infinite linear;
  }

  @-webkit-keyframes marquee {
    0%{-webkit-transform: translate(0, 0);}
    100%{-webkit-transform: translate(-100%, 0);}
  }
  @keyframes marquee{
    0%{transform: translate(0, 0);}
    100%{transform: translate(-100%, 0)}
  }
</style>
