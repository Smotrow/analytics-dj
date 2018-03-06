<template lang="jade">
  .promo-boards-wrapper
    .promo-board(v-for="board in boards", :class="board.classSize", :style="makeBg(board.bgImg)")
      .details-line.container-global
        .details-content
          .text-block
            p.none {{board.text}}
          .link-block
            router-link.link-icon(:to="board.link")
              i.far.fa-arrow-alt-circle-right
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
</style>
