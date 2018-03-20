<template lang="jade">
  div.work-panel
    main
      .container-global
        .step
          .step-header
            .row
              .col-xs-12.link-block
                router-link.home-link(:to="{name:'Main'}") home
              .col-xs-12.title-block
                .pull-left.step-name
                  h2.none name
                .pull-right.step-number
                  h3.none 1 3
          .step-content
            .row
              .col-md-4
                .row
                  .col-xs-12
                    p.none {{textMore}}
                  .col-xs-6
                    a.btn II
                  .col-xs-6 fdfsd
              .col-md-8
                .row
                  .col-xs-12
                    label email
                    input
                .row
                  .col-md-4.col-xs-12
                    label email
                    input
                  .col-md-4.col-xs-12
                    label email
                    input
                  .col-md-4.col-xs-12
                    label email
                    input
                .alternative.text-center
                  .row
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                  .row.relative
                    input(type="radio" v-model="test").radio-input
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                  .row.relative
                    input(type="radio" v-model="test").radio-input
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
            .row
              .col-md-4.col-xs-12
                label email
              .col-md-4.col-xs-12.relative
                input(type="radio" v-model="test1").radio-input
                label email
              .col-md-4.col-xs-12.relative
                input(type="radio" v-model="test1").radio-input
                label email
</template>

<script>
  import SlidersData from '../mixins/sliders-data'

  export default {
    components: {},
    data () {
      return {
        test: false,
        test1: false,
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
  .relative {
    position: relative;
  }

  .alternative {
    .radio-input {
      left: 0;
      top: 0;
      position: absolute;
      width: 10px;
      margin-left: 15px;
    }
  }
  .radio-input {
    left: 0;
    top: 0;
    z-index: 2;
    position: absolute;
    width: 10px;
    margin-left: 15px;
  }
</style>
