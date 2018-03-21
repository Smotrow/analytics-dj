<template lang="jade">
  div.work-panel
    main
      .container-global
        #step-1.step
          .step-header
            .row
              .col-xs-12.link-block
                router-link.home-link(:to="{name:'Main'}")
                  p.weight-3.text-black home
              .col-xs-12.title-block
                .header-wrap
                  .step-name
                    h2.text-dark-grey.none name
                  .step-number
                    h3.text-dark-grey.none 1 3
          .step-content
            .row
              .col-md-4.info-block
                .row.text-small
                  .col-xs-12.info-text
                    p {{textMore}}
                  .col-xs-12
                    .info-footer
                      .button-block
                        a.btn.btn-purple.btn-sm Обчислювальний інтелект
                      .supported-block
                        p.text-purple.supported Supported by
              .col-md-8
                .row
                  .col-xs-12
                    label email
                    input.classic(v-model="stepFirst.email")
                .row
                  .col-md-4.col-xs-12
                    label email
                    input.classic(v-model="stepFirst.email")
                  .col-md-4.col-xs-12
                    label email
                    input.classic(v-model="stepFirst.email")
                  .col-md-4.col-xs-12
                    label email
                    input.classic(v-model="stepFirst.email")
                .alternative.text-center.text-small
                  .row.header.vertical-align
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                    .col-xs-4
                      label email
                  .row.rate.vertical-align
                    radio-input(:modelObject="stepFirst", typeIndex="rate", value="standard", id="standard")
                    .col-xs-4
                      p email
                    .col-xs-4
                      p email
                    .col-xs-4
                      p email
                  .row.rate.vertical-align.premium(data-special="Найкраща пропозиція")
                    radio-input(:modelObject="stepFirst", typeIndex="rate", value="premium", id="premium")
                    .col-xs-4
                      p email
                    .col-xs-4
                      p email
                    .col-xs-4
                      p email
            .row
              .col-md-4.col-xs-12
                .category
                  h3.none {{textLess}}
              .col-md-4.col-xs-12
                .options
                  radio-input(:modelObject="stepFirst", typeIndex="option", value="1", id="premium1")
                  label email
              .col-md-4.col-xs-12
                .options
                  radio-input(:modelObject="stepFirst", typeIndex="option", value="2", id="premium2")
                  label email
</template>

<script>
  import RadioInput from '../components/inputs/RadioInput.vue'

  export default {
    components: {
      [RadioInput.name]: RadioInput
    },
    data () {
      return {
        test: false,
        test1: false,
        stepFirst: {
          email: '',
          lastName: '',
          firstName: '',
          middleName: '',
          rate: '',
          option: ''
        },
        textMore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.',
        textLess: 'Lorem ipsum dolor sit amet. '
      }
    }
  }
</script>

<style lang="scss">
</style>
