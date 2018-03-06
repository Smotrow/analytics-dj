import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '../components/layout-components/DashboardLayout.vue'

//Pages
import MainPage from '../pages/MainPage.vue'
import StoriesPage from '../pages/StoriesPage.vue'
import StoryPage from '../pages/StoryPage.vue'
import AboutSystemPage from '../pages/AboutSystemPage.vue'
import HowItWorksPage from '../pages/HowItWorksPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/analytics'
    },
    {
      path: '/analytics',
      component: DashboardLayout,
      redirect: '/analytics/main',
      children: [
        {
          path: 'main',
          name: 'Main',
          component: MainPage
        }, {
          path: 'story',
          name: 'Story',
          component: StoryPage
        }, {
          path: 'stories',
          name: 'Stories',
          component: StoriesPage
        }, {
          path: 'how-it-works',
          name: 'HowItWorks',
          component: HowItWorksPage
        }, {
          path: 'about-system',
          name: 'AboutSystem',
          component: AboutSystemPage
        }
      ]
    }
  ]
})
