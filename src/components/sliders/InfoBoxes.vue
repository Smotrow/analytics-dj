<template lang="jade">
  .info-boxes-section
    .info-header
      h3.weight-3 {{title}}:
    .boxes-container
      .small-info-box(v-for="box in slides")
        .title-block
          h3.weight-3 {{box.title}}
        .button-block
          .show-button(@click="openSlide(box.id)")
            a +
      transition(name="slideUp")
        .big-info-box(v-if="showBox")
          .close-block
            .close-button(@click="closeSlide")
              a +
          .navigation-block
            a.previous(@click="previousSlide")
            a.next(@click="nextSlide")
          transition-group(:name="animationName" mode="in-out")
            .box-container(v-for="slide in slides", :key='slide.id', v-if="slide.id === slideId")
              .box-header
                h3.none.weight-3 {{slide.title}}
              .box-content
                .text-block
                  p {{slide.text}}
                .img-block
                  img(:src="slide.bgImg")
</template>

<script>
  import Sliders from '../../mixins/sliders'

  export default {
    name: 'info-boxes',
    mixins: [Sliders],
    data () {
      return {
        showBox: false
      }
    },
    methods: {
      openSlide (id) {
        this.showSlide(id)
        this.showBox = true
      },
      closeSlide () {
//        this.slide = null
        this.showBox = false
      }
    }
  }
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

  /*.bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }*/
</style>
