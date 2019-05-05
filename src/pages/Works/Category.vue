<template>
  <section>
    <navbar :collapse="true" :shadow="false"></navbar>
    <sub-navbar :items="subNavItems" :auto-active="false" :animate-in="false"></sub-navbar>

    <div class="columns is-multiline is-gapless works-container">
      <div class="column is-half" v-for="(work, i) in works" :style="getWorkStyle(i, work)">
        <entry :work="work" />
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import SubNavbar from '@/components/SubNavbar'

  import Entry from '@/components/Works/Entry'

  export default {
    components: { Navbar, SubNavbar, Entry },

    data () {
      return {
        categories: [],
        works: []
      }
    },

    computed: {
      subNavItems () {
        let slug = this.$route.params.slug, items = []

        this.categories.forEach((category, index) => {
          items.push({
            text: category.title,
            route: 'works.category',
            active: category.slug == slug,
            params: { slug: category.slug }
          })
        })

        return items
      }
    },

    mounted () {
      let slug = this.$route.params.slug

      import('@/data/works/categories.json')
        .then(categories => {
          this.categories = categories.default

          let category = this.categories.find(category => category.slug == slug)

          this.$root.setPageTitle(`${category.title} - Works`)
        })

      import('@/data/works')
        .then(works => this.works = works.default.filter(work => work.category == slug))
    },

    beforeRouteUpdate (to, from, next) {
      let slug = to.params.slug

      import('@/data/works')
        .then(works => this.works = works.default.filter(work => work.category == slug))

      let category = this.categories.find(category => category.slug == slug)

      this.$root.setPageTitle(`${category.title} - Works`)

      next()
    },

    methods: {
      getWorkStyle (index, work) {
        if (this.works.length % 2 != 0 && index == this.works.length - 1) {
          return {
            width: '100%'
          }
        }

        return {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    padding-top: 72px;
  }

  .works-container {
    padding-top: 104px;
  }
</style>
