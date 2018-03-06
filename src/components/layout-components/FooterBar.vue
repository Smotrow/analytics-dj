<template lang="jade">
  footer.page-footer
    .container-global
      .footer-nav-bar
        .footer-logo.col-sm-2.col-xs-12
          router-link(to="main")
            img(src="/static/img/analytics-logo.png")
        .footer-info.col-sm-10.col-xs-12
          .about.col-sm-7.col-xs-6
            h3 Про сервіс
            ul.nav-vertical
              li
                router-link(to="stories") Історії
              li
                router-link(to="about-system") Про систему
              li
                router-link(to="how-it-works") Як працює
          .contacts.col-sm-5.col-xs-6
            h3 Контакти
            ul.nav-vertical
              li
                a тел:057-777-0866
              li
                a office@domjurista.ua
      .copyright
        p.none Дом Юриста, 2017, All rights reserved
</template>

<script>
  export default {
    name: 'footer-bar'
  }
</script>

<style>
</style>
