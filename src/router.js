import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from './views/Index.vue'
import Foo from './views/Foo.vue'
import Section from './views/Section.vue'
import Data from './views/Data.vue'
import HTTP404 from './views/HTTP404.vue'
import ShowErrorPage from './views/ShowErrorPage.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/foo/:id', name: 'foo', component: Foo },
  { path: '/section/:title', component: Section },
  { path: '/show-error-page', component: ShowErrorPage },
  { path: '/data', component: Data }
]

if (TARGET === 'web') {
  routes.push(
    // catch-all route must be placed at the last
    { path: '*', component: HTTP404 }
  )
}

export default new Router({
  mode: 'history',
  routes
})
