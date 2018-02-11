<template>
  <section>
    <navbar :animate-in="true"></navbar>

    <div class="hero is-fullheight main-hero">
      <index-hero-main></index-hero-main>
    </div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to Jose Rizal!</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import IndexHeroMain from '@/components/Index/HeroMain'

  export default {
    components: { Navbar, IndexHeroMain }
  }
</script>

<style lang="scss" scoped>
  .main-hero {
    position: relative;
  }
</style>
