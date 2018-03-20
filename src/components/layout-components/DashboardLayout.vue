<template lang="jade">
  .page(:class="{'small-nav':isWorkPanel}")
    top-nav-bar-work-panel(v-if="isWorkPanel")
    top-nav-bar(v-else)
    main.content
      transition( name="fade", mode="out-in")
        router-view
    footer-bar
</template>

<script>
  import TopNavBar from './TopNavBar.vue'
  import TopNavBarWorkPanel from './TopNavBarWorkPanel.vue'
  import FooterBar from './FooterBar.vue'

  export default {
    components: {
      [TopNavBar.name]: TopNavBar,
      [TopNavBarWorkPanel.name]: TopNavBarWorkPanel,
      [FooterBar.name]: FooterBar
    },
    data () {
      return {}
    },
    computed: {
      isWorkPanel () {
        return this.$route.name === 'WorkPanel'
      }
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .4s
  }

  .fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
</style>
