<template lang="jade">
  nav.top-nav-bar.dark( role="navigation")
    .desktop-menu
      .container-fluid
        .navbar-header
          a.main-logo.navbar-brand( href="http://domjurista.ua/")
            img(src='/static/img/logo-white.png')
        .collapse.navbar-collapse
          ul.nav.navbar-nav.navbar-right
            li
              router-link.sub-logo( :to="{ name: 'Main' }") Analytics
            li(v-for="item in links")
              a.brand-link(:href="item.link")
                i.fab(:class="item.className")
            li
              a.profile-logo
    .mobile-menu
      .container-fluid(:class="{active: showMenu}")
        .navbar-header
          a.main-logo.navbar-brand( href="http://domjurista.ua/")
            img(src='/static/img/logo-white.png')
          .burger-menu.pull-right(@click="toggleMenu", :class="{'menu-on': showMenu}")
            .burger
        .collapse-menu
          ul.nav
            li
              router-link.sub-logo( :to="{ name: 'Main' }") Analytics
            li(v-for="item in links", @click="toggleMenu")
              a.brand-link(:href="item.link")
                i.fab(:class="item.className")
            li(@click="toggleMenu")
              a.profile-logo
</template>

<script>
  import MenuItems from '../../mixins/menu-items'

  export default {
    name: 'top-nav-bar-work-panel',
    mixins: [MenuItems],
    data () {
      return {
        links: [{
          className: 'fa-twitter',
          link: '#'
        }, {
          className: 'fa-facebook-f',
          link: '#'
        }, {
          className: 'fa-linkedin',
          link: '#'
        }]
      }
    },
    created () {}
  }
</script>

<style>
</style>
