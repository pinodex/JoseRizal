<template>
  <section>
    <navbar :animate-in="true"></navbar>

    <div class="hero is-fullheight main-hero">
      <index-hero-main></index-hero-main>
    </div>

    <div class="container">
      <div class="columns main-content">
        <div class="column">
          <h1 class="title">Know the life, history, and works of Rizal</h1>
        </div>
      </div>

      <div class="columns">
        <div class="column is-6">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import IndexHeroMain from '@/components/Index/HeroMain'

  export default {
    components: { Navbar, IndexHeroMain },

    created () {
      this.$root.setPageTitle('Home')
    }
  }
</script>

<style lang="scss" scoped>
  .main-hero {
    position: relative;
  }

  .main-content {
    margin-top: 1rem;
  }
</style>
