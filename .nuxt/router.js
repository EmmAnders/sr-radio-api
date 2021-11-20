import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fce3126 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _00e909a1 = () => interopDefault(import('../pages/channels/index.vue' /* webpackChunkName: "pages/channels/index" */))
const _4de9c500 = () => interopDefault(import('../pages/programs/index.vue' /* webpackChunkName: "pages/programs/index" */))
const _133b73b6 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _019b2f4e = () => interopDefault(import('../pages/channels/_slug.vue' /* webpackChunkName: "pages/channels/_slug" */))
const _13665498 = () => interopDefault(import('../pages/episode/_slug.vue' /* webpackChunkName: "pages/episode/_slug" */))
const _51570790 = () => interopDefault(import('../pages/programs/_slug.vue' /* webpackChunkName: "pages/programs/_slug" */))
const _225eca18 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _0fce3126,
    name: "categories"
  }, {
    path: "/channels",
    component: _00e909a1,
    name: "channels"
  }, {
    path: "/programs",
    component: _4de9c500,
    name: "programs"
  }, {
    path: "/categories/:slug",
    component: _133b73b6,
    name: "categories-slug"
  }, {
    path: "/channels/:slug",
    component: _019b2f4e,
    name: "channels-slug"
  }, {
    path: "/episode/:slug?",
    component: _13665498,
    name: "episode-slug"
  }, {
    path: "/programs/:slug",
    component: _51570790,
    name: "programs-slug"
  }, {
    path: "/",
    component: _225eca18,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
