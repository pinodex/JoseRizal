<template>
  <section>
    <navbar :animate-in="true"></navbar>

    <div class="hero is-fullheight main-hero">
      <index-hero-main></index-hero-main>
    </div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8">
              <div class="content">
                <h1 class="title">Know the life, history, and works of Rizal</h1>

                <p>
                  Welcome to Jose Rizal Online! This website provides an interactive view in the life, history, and works of Jose Protacio Alonso Realonda Mercado Rizal.
                </p>

                <p>
                  In this website you will the biography, geneology, education, travels, paintings, literatures, sculptures, sketches, and discoveries of Jose Rizal.
                </p>
              </div>
            </div>

            <div class="column">
              <featured-work></featured-work>

              <trivia class="trivia"></trivia>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import randomItem from 'random-item'

  import Navbar from '@/components/Navbar'
  import IndexHeroMain from '@/components/Index/HeroMain'
  import FeaturedWork from '@/components/FeaturedWork'
  import Trivia from '@/components/Trivia'

  export default {
    components: { Navbar, IndexHeroMain, Trivia, FeaturedWork },

    created () {
      this.$root.setPageTitle('Home')
    }
  }
</script>

<style lang="scss" scoped>
  .main-hero {
    position: relative;
  }

  .trivia {
    margin-top: 2rem;
  }
</style>
