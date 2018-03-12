<template lang="jade">
  .slider-full
    .slide-arrow.arrow-previous(@click="previousSlide")
      a.arrow
        i.fas.fa-chevron-circle-left
    .slide-arrow.arrow-next(@click="nextSlide")
      a.arrow
        i.fas.fa-chevron-circle-right
    .slider-container(:style="slideImg(slide.bgImg)")
      .slider-header
        p.none {{title}}
      .slider-content.container-global
        .content-title
          p.none.weight-6 {{slide.title}}
        .content-text
          p.none {{slide.text}}
      .slider-navigation
        a.navigation-btn(
        v-for="nav in slides",
        @click="showSlide(nav.id)",
        :class="nav.id === slide.id ? 'active-slide' : ''") {{nav.title}}
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'slider-full-screen',
    props: {
      title: String,
      slides: {
        type: Array
      }
    },
    data () {
      return {
        slide: null
      }
    },
    computed: {},
    created () {
      this.slide = this.slides[0]
    },
    methods: {
      slideImg (bg) {
        return bg ? 'background-image: ' + bg : ''
      },
      showSlide (slideId) {
        this.slide = _.find(this.slides, {id: slideId})
      },
      nextSlide () {
        let nextIndex = this.slide.id === (this.slides.length) ? 1 : (this.slide.id + 1)
        this.showSlide(this.slides[nextIndex - 1].id)
      },
      previousSlide () {
        let previousIndex = this.slide.id === 1 ? (this.slides.length) : (this.slide.id - 1)
        this.showSlide(this.slides[previousIndex - 1].id)
      }
    }
  }
</script>

<style lang="scss">
</style>
