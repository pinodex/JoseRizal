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

                  <div class="card featured-work">
                    <div class="card-image">
                      <figure class="image is-16by9">
                        <img :src="featuredWork.banner">
                      </figure>
                    </div>

                    <router-link :to="{ name: 'works.view', params: { slug: featuredWork.slug } }"
                      class="overlay-content">
                      <p class="is-size-5">{{ featuredWork.title }}</p>
                    </router-link>
                  </div>
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

    <div class="hero is-fullheight is-dark">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="has-text-centered">
            <h1 class="is-size-1">Hero&lsquo;s Timeline</h1>
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

  export default {
    components: { Navbar, IndexHeroMain },

    data () {
      return {
        trivia: null,
        featuredWork: null
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

  .featured-work {
    position: relative;

    .overlay-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background: rgba(0, 0, 0, 0.5);

      color: #fff;

      transition: opacity 0.3s ease;
      opacity: 0;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>
