<template>
  <section>
    <navbar :collapse="true" :shadow="true"></navbar>

    <transition name="fade">
      <div class="hero is-dark is-medium header-banner" :style="headerStyle" v-if="entry">
        <div class="overlay"></div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-centered">
              <div class="column is-6">
                <h1 class="title">{{ entry.title }}</h1>
                <p>{{ entry.description }}</p>

                <div class="tags is-centered">
                  <span class="tag is-medium" v-for="tag in entry.tags" :key="tag">
                    {{ tag }}
                  </span>
                </div>
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

      import(`@/data/blog`)
        .then(entries => {
          this.entry = entries.find(e => e.slug == slug)

          this.$root.setPageTitle(`${this.entry.title} - Blog`)
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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.5);
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
    margin-top: 52px;
  }

  .content-container {
    margin-top: 2rem;
  }

  .tags {
    margin-top: 1rem;
  }
</style>
