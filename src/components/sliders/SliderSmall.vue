<template lang="jade">
  .slider-small
    .slider-nav-menu
      h3.weight-4 {{title}}
      ul.nav-vertical
        li(v-for="nav in slides")
          a.weight-3(@click="showSlide(nav.id)",
          :class="nav.id === slide.id ? 'active-slide' : ''") {{nav.title}}
    .slider-container
      .slider-navigation
        a.navigation-btn(v-for="nav in slides", @click="showSlide(nav.id)",
        :class="nav.id === slide.id ? 'active-slide' : ''")
      .slide-arrow.arrow-previous(@click="previousSlide")
        a.arrow
          i.fas.fa-chevron-circle-left
      .slide-arrow.arrow-next(@click="nextSlide")
        a.arrow
          i.fas.fa-chevron-circle-right
      transition-group(:name="animationName" mode="out-in").transition
        .slider-slide(v-for="slide in slides", :key='slide.id', v-if="slide.id === slideId")
          .slider-img(:style="slideBg(slide.bgImg)")
          .slider-content
            .content-title
              p.none.weight-5 {{slide.title}}
            .content-text
              p.none {{slide.text}}
</template>

<script>
  import Sliders from '../../mixins/sliders'

  export default {
    name: 'slider-small',
    mixins: [Sliders]
  }
</script>

<style lang="scss">
  /*.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to !* .fade-leave-active до версии 2.1.8 *! {
    opacity: 0;
  }*/
</style>
