<template lang="jade">
  nav.top-nav-bar( role="navigation")
    .desktop-menu
      .container-fluid
        .navbar-header
          a.main-logo.navbar-brand( href="http://domjurista.ua/")
            img(src='/static/img/logo.png')
      .container-fluid
        .navbar-header
          router-link.sub-logo.navbar-brand( :to="{ name: 'Main' }") Analytics
        .collapse.navbar-collapse
          ul.nav.navbar-nav.navbar-right
            li(v-for="item in menuItems", @click="ScrollTop")
              router-link(:to="{ name: item.name}") {{item.title}}
            li
              a(href="#contacts") Контакти
            li
              span
                router-link.general-link.btn.btn-primary.btn-group-xs(to="#") Розпочати безкоштовно
    .mobile-menu
      .container-fluid(:class="{active: showMenu}")
        .navbar-header
          router-link.sub-logo.navbar-brand( :to="{name: 'Main'}") Analytics
          .burger-menu.pull-right(@click="toggleMenu", :class="{'menu-on': showMenu}")
            .burger
        .collapse-menu
          ul.nav
            li(v-for="item in menuItems", @click="ScrollTop")
              router-link(:to="{ name: item.name}") {{item.title}}
            li
              a(href="#contacts") Контакти
            li
              span
                router-link.general-link.btn.btn-primary.btn-group-xs(to="#") Розпочати безкоштовно
</template>

<script>
  import MenuItems from '../../mixins/menu-items'

  export default {
    name: 'top-nav-bar',
    mixins: [MenuItems],
    created () {}
  }
</script>

<style>
</style>
