<template>
  <section>
    <navbar :collapse="true" :shadow="false"></navbar>
    <sub-navbar :items="subNavItems"></sub-navbar>

    <transition name="fade" mode="out-in">
      <component :is="currentPage" :class="{ page: hasPaddingTop() }"></component>
    </transition>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import SubNavbar from '@/components/SubNavbar'

  const pages = {
    about: () => import('@/pages/Biography/About'),
    family: () => import('@/pages/Biography/Family'),
    education: () => import('@/pages/Biography/Education')
  }

  const mapping = {
    'biography': pages.about,
    'biography.family': pages.family,
    'biography.education': pages.education
  }

  const withPaddingTop = ['biography.family']

  export default {
    components: { Navbar, SubNavbar },

    data () {
      return {
        subNavItems: [
          { text: 'About José Rizal', route: 'biography' },
          { text: 'Family', route: 'biography.family' },
          { text: 'Education', route: 'biography.education' }
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
    },

    methods: {
      hasPaddingTop () {
        return withPaddingTop.indexOf(this.$route.name) >= 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    padding-top: 120px;
  }
</style>
