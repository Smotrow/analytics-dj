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
    transition-group(name="fade" mode="in-out")
      .slider-container(v-for="slide in slides", :key='slide.id', v-if="slide.id === slideId")
        .slider-header
          p {{title}}
        .slider-content.container-global
          .img-block
            img(:src="slide.bgImg")
          .text-block
            .content-title
              p.weight-6 {{slide.title}}
            .content-text
              p {{slide.text}}
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
