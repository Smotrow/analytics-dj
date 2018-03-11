export default {
  data () {
    return {
      menuItems: [
        {name: 'Stories', title: 'Історії'},
        {name: 'AboutSystem', title: 'Про систему'},
        {name: 'HowItWorks', title: 'Як працює'}
      ],
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    ScrollTop () {
      window.scrollTo(0, 0)
      this.showMenu = false
    }
  }
}
