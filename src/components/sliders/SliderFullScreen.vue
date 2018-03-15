<template lang="jade">
  .slider-full
    .slide-arrow.arrow-previous(@click.prevent="previousSlide")
      a.arrow
        i.fas.fa-chevron-circle-left
    .slide-arrow.arrow-next(@click.prevent="nextSlide")
      a.arrow
        i.fas.fa-chevron-circle-right
    .slider-navigation
      a.navigation-btn(
      v-for="nav in slides",
      @click.prevent="showSlide(nav.id)",
      :class="nav.id === slide.id ? 'active-slide' : ''") {{nav.title}}
    transition-group(:name="animationName" mode="in-out")
      .slider-container(v-for="slide in slides", :key='slide.id', v-if="slide.id === slideId", :style="slideBg(slide.bgImg)")
        .slider-header
          p.none {{title}}
        .slider-content.container-global
          .content-title
            p.none.weight-6 {{slide.title}}
          .content-text
            p.none {{slide.text}}
</template>

<script>
  import Sliders from '../../mixins/sliders'

  export default {
    name: 'slider-full-screen',
    mixins: [Sliders]
  }
</script>

<style lang="scss">

</style>
