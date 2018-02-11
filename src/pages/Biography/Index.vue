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
    family: () => import('@/pages/Biography/Family')
  }

  const mapping = {
    'biography': pages.about,
    'biography.family': pages.family
  }

  export default {
    components: { Navbar, SubNavbar },

    data () {
      return {
        subNavItems: [
          { text: 'About José Rizal', route: 'biography' },
          { text: 'Family', route: 'biography.family' }
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

<style lang="scss" scoped>

</style>
