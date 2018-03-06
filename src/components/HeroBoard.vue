<template lang="jade">
  .hero-container(:style="mainImg")
    .substrate(:style="needSubstrateImg")
      .bord-info.container-global
        .bord-header
          slot(name="header")
        .bord-content
          slot(name="content")
      .details-line.container-global(v-if="needDetails")
        slot(name="details")
</template>

<script>
  export default {
    name: 'hero-board',
    props: {
      bgImg: String,
      needDetails: {
        type: Boolean,
        'default': false
      },
      needSubstrate: {
        type: Boolean,
        'default': true
      }
    },
    data () {
      return {}
    },
    computed: {
      needSubstrateImg () {
        return this.needSubstrate ? '' : 'background-image: none'
      },
      mainImg () {
        return this.bgImg ? 'background-image: ' + this.bgImg : ''
      }
    }
  }
</script>

<style lang="scss">
</style>
