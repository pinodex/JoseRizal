<template>
  <section>
    <navbar></navbar>

    <div class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Page Not Found</h1>
          <p>The page you are looking for was not found on this website.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <trivia></trivia>
        </div>

        <div class="column is-offset-4 is-4">
          <featured-work></featured-work>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import FeaturedWork from '@/components/FeaturedWork'
  import Trivia from '@/components/Trivia'

  export default {
    components: { Navbar, FeaturedWork, Trivia },

    created () {
      this.$root.setPageTitle('Page Not Found')
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    margin-bottom: 1rem;
  }
</style>
