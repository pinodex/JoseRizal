<template>
  <section>
    <navbar :collapse="true" :shadow="true"></navbar>

    <transition name="fade">
      <div class="hero is-dark is-fullheight" :style="style" v-if="work">
        <div class="overlay"></div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-centered">
              <div class="column is-6">
                <h1 class="title">{{ work.title }}</h1>

                <p>{{ work.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="slide-fade">
      <div class="container content-container" v-if="content">
        <div class="columns is-centered">
          <div class="column is-6">
            <div class="content">
              <component :is="content"></component>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    components: { Navbar },

    data () {
      return {
        work: null,
        content: null
      }
    },

    computed: {
      style () {
        return {
          backgroundImage: `url(${this.work.banner})`
        }
      }
    },

    mounted () {
      let slug = this.$route.params.slug

      import(`@/data/works/${slug}`)
        .then(work => this.work = work)

      import(`@/data/works/${slug}/content.md`)
        .then(content => this.content = content.default)
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background-position: center;
    background-size: cover;

    position: relative;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: rgba(0, 0, 0, 0.5)
    }
  }

  .content-container {
    margin-top: 2rem;
  }
</style>
