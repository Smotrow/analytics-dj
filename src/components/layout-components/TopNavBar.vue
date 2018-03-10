<template lang="jade">
  nav.top-nav-bar( role="navigation")
    .desktop-menu
      .container-fluid
        .navbar-header
          a.main-logo.navbar-brand( href="http://domjurista.ua/")
            img(src='/static/img/logo.png')
      .container-fluid
        .navbar-header
          router-link.sub-logo.navbar-brand( to="main") Analytics
        .collapse.navbar-collapse
          ul.nav.navbar-nav.navbar-right
            li(v-for="item in menuItems")
              router-link(:to="{ name: item.name}") {{item.title}}
            li
              span
                router-link.general-link.btn.btn-primary.btn-group-xs(to="#") Розпочати безкоштовно
    .mobile-menu
      .container-fluid
        .navbar-header
          router-link.sub-logo.navbar-brand( to="main") Analytics
          a.toggle-menu.pull-right(@click="toggleMenu")
            i(v-show="!showMenu")
              i.fas.fa-bars
            i(v-show="showMenu")
              i.fas.fa-times
        .collapse-menu( v-if="showMenu")
          ul.nav
            li(v-for="item in menuItems", @click="closeMenu")
              router-link(:to="{ name: item.name}") {{item.title}}
            li
              span
                router-link.general-link.btn.btn-primary.btn-group-xs(to="#") Розпочати безкоштовно
</template>

<script>
  export default {
    name: 'top-nav-bar',
    data () {
      return {
        menuItems: [
          {name: 'Stories', title: 'Історії'},
          {name: 'AboutSystem', title: 'Про систему'},
          {name: 'HowItWorks', title: 'Як працює'},
          {name: 'Main', title: 'Контакти'}
        ],
        showMenu: false
      }
    },
    methods: {
      toggleMenu () {
        this.showMenu = !this.showMenu
      },
      closeMenu () {
        this.showMenu = false
      }
    },
    created () {}
  }
</script>

<style>
</style>
