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
      <div class="columns is-centered">
        <div class="column is-6">
          <random-quotation class="quote"></random-quotation>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import RandomQuotation from '@/components/RandomQuotation'

  export default {
    components: { Navbar, RandomQuotation },

    created () {
      this.$root.setPageTitle('Page Not Found')
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    margin-bottom: 1rem;
  }

  .quote {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
</style>
