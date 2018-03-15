import _ from 'lodash'

export default {
  props: {
    title: String,
    slides: {
      type: Array
    }
  },
  data () {
    return {
      slide: null,
      animationName: null
    }
  },
  computed: {
    slideId () {
      return this.slide.id
    }
  },
  created () {
    this.slide = this.slides[0]
  },
  methods: {
    slideBg (bg) {
      return bg ? `background-image: url(${bg})` : ''
    },
    slideImg (bg) {
      return bg ? `background-image: url(${bg})` : ''
    },
    showSlide (slideId) {
      this.animationName = (this.slide.id > slideId) ? 'slide-fade-left' : 'slide-fade-right'
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
