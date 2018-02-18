import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About')
    },

    {
      path: '/biography',
      name: 'biography',
      component: () => import('@/pages/Biography/Index')
    },

    {
      path: '/biography/family',
      name: 'biography.family',
      component: () => import('@/pages/Biography/Index')
    },

    {
      path: '/biography/education',
      name: 'biography.education',
      component: () => import('@/pages/Biography/Index')
    },

    {
      path: '/biography/monuments',
      name: 'biography.monuments',
      component: () => import('@/pages/Biography/Index')
    },

    {
      path: '/biography/philosophies',
      name: 'biography.philosophies',
      component: () => import('@/pages/Biography/Index')
    },

    {
      path: '/biography/personalities',
      name: 'biography.personalities',
      component: () => import('@/pages/Biography/Index')
    },

    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/pages/Blog/Index')
    },

    {
      path: '/blog/tag/:slug',
      name: 'blog.tag',
      component: () => import('@/pages/Blog/Index')
    },

    {
      path: '/blog/:slug',
      name: 'blog.entry',
      component: () => import('@/pages/Blog/Entry')
    },

    {
      path: '/works',
      name: 'works',
      component: () => import('@/pages/Works/Index')
    },

    {
      path: '/works/:slug',
      name: 'works.category',
      component: () => import('@/pages/Works/Category')
    },

    {
      path: '/works/view/:slug',
      name: 'works.view',
      component: () => import('@/pages/Works/Work')
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return new Promise((resolve, reject) => {
      let scrollDuration = 500,
          cosParameter = window.scrollY / 2,
          oldTimestamp = performance.now(),
          scrollCount = 0

      function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
        }

        if (window.scrollY === 0) {
          resolve({ x: 0, y: 0 })

          return
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))

        oldTimestamp = newTimestamp

        window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step);
    })
  }
})

router.beforeEach((to, from, next) => {
  router.app.$emit('router:start')

  if (to.meta.progress !== undefined) {
    let meta = to.meta.progress

    router.app.$Progress.parseMeta(meta)
  }

  router.app.$Progress.start()

  next()
})

router.afterEach(() => {
  router.app.$emit('router:finish')

  router.app.$Progress.finish()
})

export default router
