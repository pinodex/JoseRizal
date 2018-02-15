<template>
  <section>
    <navbar :collapse="true" :shadow="true"></navbar>

    <transition name="fade">
      <div class="hero is-dark is-fullheight header-banner" :style="headerStyle" v-if="entry">
        <div class="overlay"></div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">{{ entry.title }}</h1>
            <p>{{ entry.description }}</p>
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
  import entries from '@/data/blog'

  export default {
    components: { Navbar },

    data () {
      return {
        entry: null,
        content: null
      }
    },

    computed: {
      headerStyle () {
        if (!this.entry) {
          return {}
        }

        return {
          backgroundImage: `url(${this.entry.banner})`
        }
      }
    },

    mounted () {
      let slug = this.$route.params.slug

      import(`@/data/blog/${slug}`)
        .then(entry => {
          this.entry = entry

          this.$root.setPageTitle(`${entry.title} - Blog`)
        })

      import(`@/data/blog/${slug}/content.md`)
        .then(content => this.content = content.default)
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    padding-top: 72px;
  }

  .entry {
    margin-bottom: 1rem;

    .details {
      padding: 1rem;
    }

    .name {
      text-transform: uppercase;

      a {
        color: #bc5d29;
      }
    }

    .description {
      font-size: 0.8rem;
    }
  }

  .header-banner {
    background-position: center;
    background-size: cover;

    position: relative;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: rgba(0, 0, 0, 0.75);
    }
  }

  .content-container {
    margin-top: 2rem;
  }
</style>