<template lang="jade">
  div
    header
      hero-board(:bgImg="story.bgImg")
        div(slot="header")
          h3.weight-3 {{story.hero.title}}
        div(slot="content")
          p.none.weight-3 {{story.hero.content}}
    main
      section.story-section.container-global
        .row
          .col-xs-12.col-sm-9.col-md-6
            .story-header-info
              p.none Клієнт: {{story.client}}
              p.none Project:
                router-link(:to="{name: 'Main'}")  {{story.project}}
            .story-main
              .text-section( v-for="block in story.textBlocks")
                h4.weight-6 {{block.title}}
                p( v-for="paragraph in block.content") {{paragraph}}
</template>

<script>
  import HeroBoard from '../components/HeroBoard.vue'
  import StoriesData from '../mixins/stories-data'
  import _ from 'lodash'

  export default {
    components: {
      [HeroBoard.name]: HeroBoard
    },
    mixins: [StoriesData],
    data () {
      return {
        story: null
      }
    },
    methods: {
      getStory (id) {
        this.story = _.find(this.stories, {id: id})
      }
    },
    created () {
      const storyId = Number(this.$route.params.id)
      this.getStory(storyId)
    }
  }
</script>

<style>
</style>
