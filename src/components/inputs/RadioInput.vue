<template lang="jade">
  .radio-input
    input.radio-btn(type="radio", :id="id" v-model="modelObject[typeIndex]", :value="value")
    label.radio-label(:for="id") {{label}}
</template>

<script>

  export default {
    props: {
      id: {
        type: String,
        'default': 'radio-id'
      },
      label: {
        type: String,
        'default': ''
      },
      value: {
        type: String,
        'default': ''
      },
      typeIndex: {
        type: String
      },
      modelObject: {
        type: Object
      }
    },
    name: 'radio-input'
  }
</script>

<style lang="scss">
</style>
