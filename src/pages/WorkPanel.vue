<template lang="jade">
  div.work-panel
    main
      .container-global
        .step-header
          .row
            .col-xs-12.link-block
              router-link.home-link(:to="{name:'Main'}")
                p.weight-3.text-black home
            .col-xs-12.title-block
              .header-wrap
                .step-name
                  h2.text-dark-grey.none {{step.name}}
                .step-number
                  h3.text-dark-grey.none Крок {{step.id}} з 3
        #step-1.steps(v-show="currentStep === 1")
          .row
            .col-md-4.info-block
              .row.text-small
                .col-xs-12.info-text
                  p {{textMore}}
                .col-xs-12
                  .info-footer
                    .button-block
                      span.btn-purple Обчислювальний інтелект
                    .supported-block
                      p.text-purple.supported Supported by
            .col-md-8
              .row
                .col-xs-12
                  label email
                  input.classic(v-model="stepFirst.email")
              //.row
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
                radio-input(:modelObject="stepFirst", typeIndex="rate", value="1", id="premium1")
                label email
            .col-md-4.col-xs-12
              .options
                radio-input(:modelObject="stepFirst", typeIndex="rate", value="2", id="premium2")
                label email
          .row
            .col-xs-12.text-right
              a.next.btn.btn-primary-bright(@click="nextStep") Далі
        #step-2.steps(v-show="currentStep === 2")
          .row
            .col-sm-push-6.col-sm-5.col-sm-offset-1.col-xs-12.animation-block
              p.header.weight-6 {{textLess}}
              .animation
                //TODO: animation
                img(src="/static/img/animation-img.png")
            .col-sm-pull-6.col-sm-6.col-xs-12.questions-block(v-for="question in questions", v-if="question.id === currentQuestion")
              .row.question-wrap
                .col-xs-12.header
                  p.weight-6 {{textLess}}
                .col-xs-12.question
                  p {{question.question}}
              .row.answer-wrap
                .col-xs-12.header
                  p.weight-6 {{textLess}}
                .col-xs-12.answer(v-for="answer in question.answers", @click="nextQuestion(question.question, answer)")
                  i.check
                  p {{answer}}
              .row.back-wrap
                .col-xs-12.back
                  p.weight-6(@click="previousStep") Back
        #step-3.steps(v-show="currentStep === 3 && !isPaid")
          .row
            .col-md-6.col-xs-12
              .result
                i.logo
                .result-header
                  p.weight-6 {{textLess}}
                .result-content.text-small
                  p.weight-4  {{textLess}}
                .result-footer
                  .send-block
                    p.weight-6 Send
                    i.send
            .col-md-6.col-xs-12
              .premium-result
                .result-header
                  p.weight-6 {{textLess}}
                .opportunities.text-small
                  i.more-info
                  p.weight-4 {{textLess}}
                .opportunities.text-small
                  i.variants
                  p.weight-4 {{textLess}}
                .cost
                  p.weight-6 Cost - 1000
                .result-footer
                  .send-block(@click="payment")
                    p.weight-6 Send
                    i.send
        #step-after-payment.steps(v-show="currentStep === 3 && isPaid")
          .row
            .col-sm-8.col-sm-offset-2.col-xs-12
              .result
                i.logo
                .result-header
                  p.weight-6 {{textLess}}
                .result-content.text-small
                  p.weight-4  {{textLess}}
                .result-footer
                  .send-block
                    p.weight-6 Send
                    i.send
</template>

<script>
  import RadioInput from '../components/inputs/RadioInput.vue'
  import StepsData from '../mixins/steps-data'

  export default {
    components: {
      [RadioInput.name]: RadioInput
    },
    mixins: [StepsData],
    data () {
      return {
        isPaid: false,
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
        step: {},
        currentStep: 1,
        currentQuestion: 0,
        questions: [
          {
            id: 0,
            question: 'Lorem ipsum dolor sit amet. ',
            answers: [
              'Lorem ipsum dolor sit amet. ',
              'Lorem ipsum dolor sit amet. ',
              'Lorem ipsum dolor sit amet. '
            ]
          }, {
            id: 1,
            question: 'Lorem ipsum dolor sit amet. ',
            answers: [
              'Lorem ipsum dolor sit amet. ',
              'Lorem ipsum dolor sit amet. ',
              'Lorem ipsum dolor sit amet. '
            ]
          }
        ],
        textMore: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.' +
        'Diam, eu fringilla enim nunc id dui. Suspendisse a luctus leo.',
        textLess: 'Lorem ipsum dolor sit amet. '
      }
    },
    created () {
      this.step = this.steps[0]
    },
    methods: {
      nextStep () {
        ++this.currentStep
        this.step = this.steps[this.currentStep - 1]
      },
      nextQuestion (question, answer) {
        if (this.currentQuestion + 1 === this.questions.length) this.nextStep()
        ++this.currentQuestion
        console.log(question)
        console.log(answer)
      },
      previousStep () {
        --this.currentStep
        this.step = this.steps[this.currentStep - 1]
      },
      payment () {
        this.isPaid = true
      }
    }
  }
</script>
