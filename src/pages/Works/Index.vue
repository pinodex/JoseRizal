<template>
  <section>
    <navbar :collapse="true" :shadow="false"></navbar>
    <sub-navbar :items="subNavItems" :auto-active="false"></sub-navbar>

    <entry v-for="(entry, i) in entries" :key="i" :work="entry"></entry>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import SubNavbar from '@/components/SubNavbar'
  import Entry from '@/components/Works/Entry'

  import entries from '@/data/works'
  import categories from '@/data/works/categories'

  export default {
    components: { Navbar, SubNavbar, Entry },

    computed: {
      entries () {
        let slug = this.$route.params.category

        if (!slug) {
          return entries
        }

        return entries.filter(entry => entry.category == slug)
      },

      subNavItems () {
        let slug = this.$route.params.category,
            items = [
              {
                text: "All",
                route: "works",
                active: !slug
              }
            ]

        categories.forEach((category, index) => {
          items.push({
            text: category.title,
            route: 'works.category',
            active: category.slug == slug,
            params: {
              category: category.slug
            }
          })
        })

        return items
      },

      currentCategory () {
        let slug = this.$route.params.category,
            currentCategory = null

        if (slug) {
          categories.forEach(category => {
            if (category.slug == slug) {
              currentCategory = category
            }
          })
        }

        return currentCategory
      }
    },

    watch: {
      currentCategory (newValue, oldValue) {
        if (!newValue) {
          this.$root.setPageTitle('Works')

          return
        }

        this.$root.setPageTitle(`${newValue.title} - Works`)
      }
    },

    created () {
      this.$root.setPageTitle('Works')

      if (this.currentCategory) {
        this.$root.setPageTitle(`${this.currentCategory.title} - Works`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    padding-top: 72px;
  }
</style>
