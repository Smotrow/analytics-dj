<template lang="jade">
  nav.top-nav-bar( role="navigation")
    .container-fluid
      .navbar-header
        a#main-logo.navbar-brand( href="http://domjurista.ua/")
          img(src='/static/img/logo.png')
    .container-fluid
      .navbar-header
        router-link#sub-logo.navbar-brand( to="main") Analytics
      .collapse.navbar-collapse
        ul.nav.navbar-nav.navbar-right
          li
            router-link(:to="{ name: 'Stories'}") Історії
          li
            router-link(:to="{ name: 'AboutSystem'}") Про систему
          li
            router-link(:to="{ name: 'HowItWorks'}") Як працює
          li
            router-link(to="#") Контакти
          li
            span
               router-link.general-link.btn.btn-primary.btn-group-xs(to="#") Розпочати безкоштовно
</template>

<script>
  export default {
    name: 'top-nav-bar',
    data () {
      return {}
    },
    methods: {},
    created () {}
  }
</script>

<style>
</style>
