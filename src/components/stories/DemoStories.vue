<template lang="jade">
  section.demo-stories-wrapper
    .demo-story(v-for="story in stories")
      .story-img(:style="makeBg(story.bgImg)")
      .story-content
        .story-title
          p {{story.text}}
        .story-link
          router-link(:to="{ name: 'Story', params: { id: story.id }}")
            p Читати далі
</template>

<script>
  export default {
    name: 'demo-stories',
    props: {
      stories: Array
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
