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
              <transition name="slide-fade">
                <section v-if="featuredWork">
                  <h2 class="subtitle">Featured Work</h2>

                  <entry :work="featuredWork" :height="250"></entry>
                </section>
              </transition>

              <transition name="slide-fade">
                <section v-if="trivia">
                  <h2 class="subtitle did-you-know">Did you know?</h2>
                  <div class="content" v-if="trivia">
                    <p>{{ trivia }}</p>
                  </div>
                </section>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<component :is="timeline"></component>-->
  </section>
</template>

<script>
  import randomItem from 'random-item'

  import Navbar from '@/components/Navbar'
  import IndexHeroMain from '@/components/Index/HeroMain'
  import Entry from '@/components/Works/Entry'

  export default {
    components: { Navbar, IndexHeroMain, Entry },

    data () {
      return {
        trivia: null,
        featuredWork: null,

        timeline: null
      }
    },

    created () {
      this.$root.setPageTitle('Home')
    },

    mounted () {
      import('@/data/trivia')
        .then(trivias => this.trivia = randomItem(trivias))

      import('@/data/works')
        .then(works => this.featuredWork = randomItem(works))

      this.timeline = () => import('@/components/Index/Timeline')
    }
  }
</script>

<style lang="scss" scoped>
  .main-hero {
    position: relative;
  }

  .did-you-know {
    margin-top: 2rem;
  }
</style>
