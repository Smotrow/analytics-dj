<template lang="jade">
  .promo-boards-wrapper
    .promo-board(v-for="board in boards", :class="board.classSize", :style="makeBg(board.bgImg)")
      .overblock-img(v-if="board.mainImg", :style="makeBg(board.mainImg)")
      .details-line.container-global
        .details-content
          .text-block
            p {{board.text}}
          .link-block
            router-link.arrow-link(:to="board.link")
</template>

<script>
  export default {
    name: 'promo-boards',
    props: {
      boards: Array
    },
    data () {
      return {}
    },
    methods: {
      makeBg (bgImg) {
        return bgImg ? 'background-image: ' + bgImg : ''
      }
    }
  }
</script>

<style lang="scss">
  .overblock-img {
    position: absolute;
    align-self: center;
    width: 80%;
    height: 100%;
    margin-top: -45px;
    background: center bottom no-repeat;
    background-size: contain;
    z-index: 10;
    @media (max-width: 500px) {
      & {
        width: 85%;
        background: center center no-repeat;
        background-size: contain;
        margin-top: 0;
      }
    }
    @media (min-width: 500px) {
      & {
        width: 80%;
        margin-top: -40px;
      }
    }
    @media (min-width: 768px) {
      & {
        width: 95%;
        margin-top: -45px;
      }
    }
    @media (min-width: 988px) {
      & {
        width: 90%;
        margin-top: -40px;
      }
    }
    @media (min-width: 1200px) {
      & {
        width: 70%;
        margin-top: -40px;
      }
    }
  }
</style>
