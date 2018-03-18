<template lang="jade">
  footer.page-footer
    .container-global
      .footer-nav-bar
        .footer-logo.col-sm-2.col-xs-12
          router-link( :to="{ name: 'Main' }")
            img(src="/static/img/analytics-logo.png")
        .footer-info.col-sm-10.col-xs-12
          .about.col-sm-7.col-xs-12
            h3 Про сервіс
            ul.nav-vertical
              li(v-for="item in menuItems", @click="toggleMenu")
                router-link(:to="{ name: item.name}") {{item.title}}
          #contacts.contacts.col-sm-5.col-xs-12
            h3 Контакти
            ul.nav-vertical
              li
                a тел: 057-777-0866
              li
                a office@domjurista.ua
      .copyright
        p.none Дом Юриста, 2018, All rights reserved
</template>

<script>
  import MenuItems from '../../mixins/menu-items'

  export default {
    name: 'footer-bar',
    mixins: [MenuItems]
  }
</script>

<style>
</style>
