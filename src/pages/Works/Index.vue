<template>
  <section>
    <navbar :collapse="true"></navbar>

    <router-link v-for="(category, i) in categories" :key="i"
      :to="{ name: 'works.category', params: { slug: category.slug } }">

      <category :category="category" />
    </router-link>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Category from '@/components/Works/Category'

  export default {
    components: { Navbar, Category },

    data () {
      return {
        categories: []
      }
    },

    mounted () {
      this.$root.setPageTitle('Works')

      import(`@/data/works/categories.json`)
        .then(categories => this.categories = categories.default)
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    padding-top: 72px;
  }
</style>
