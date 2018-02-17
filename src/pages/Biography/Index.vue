<template>
  <section>
    <navbar :collapse="true" :shadow="false"></navbar>
    <sub-navbar :items="subNavItems"></sub-navbar>

    <transition name="fade" mode="out-in">
      <component :is="currentPage"></component>
    </transition>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import SubNavbar from '@/components/SubNavbar'

  const pages = {
    about: () => import('@/pages/Biography/About'),
    family: () => import('@/pages/Biography/Family'),
    education: () => import('@/pages/Biography/Education'),
    monuments: () => import('@/pages/Biography/Monuments'),
    philosophies: () => import('@/pages/Biography/Philosophies'),
    personalities: () => import('@/pages/Biography/Personalities')
  }

  const mapping = {
    'biography': pages.about,
    'biography.family': pages.family,
    'biography.education': pages.education,
    'biography.monuments': pages.monuments,
    'biography.philosophies': pages.philosophies,
    'biography.personalities': pages.personalities
  }

  export default {
    components: { Navbar, SubNavbar },

    data () {
      return {
        subNavItems: [
          { text: 'About José Rizal', route: 'biography' },
          { text: 'Family', route: 'biography.family' },
          { text: 'Education', route: 'biography.education' },
          { text: 'Monuments', route: 'biography.monuments' },
          { text: 'Philosophies', route: 'biography.philosophies' },
          { text: 'Personalities', route: 'biography.personalities' }
        ]
      }
    },

    computed: {
      currentPage () {
        return mapping[this.$route.name]
      }
    },

    created () {
      this.$root.setPageTitle('Biography')
    }
  }
</script>
