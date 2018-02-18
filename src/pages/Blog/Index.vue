<template>
  <section>
    <navbar :collapse="true" :shadow="true"></navbar>

    <div class="container main-container">
      <div class="columns">
        <div class="column">
          <div class="tabs">
            <ul>
              <li :class="{ 'is-active': !activeTag }">
                <router-link :to="{ name: 'blog' }">all</router-link>
              </li>

              <li v-for="tag in tags" :key="tag" :class="{ 'is-active': activeTag == tag }">
                <router-link :to="{ name: 'blog.tag', params: { slug: tag } }">
                  {{ tag }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column" v-for="column in entries">
          <div class="card entry" v-for="entry in column">
            <figure class="image" v-if="entry.banner">
              <img :src="entry.banner" />
            </figure>

            <div class="details">
              <h2 class="name">
                <router-link
                  :to="{ name: 'blog.entry', params: { slug: entry.slug } }">
                    {{ entry.title }}
                  </router-link>
              </h2>

              <p class="description" v-html="entry.description"></p>

              <div class="tags">
                <router-link v-for="tag in entry.tags" :to="{ name: 'blog.tag', params: { slug: tag } }"
                  class="tag is-rounded">
                  {{ tag }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import entries from '@/data/blog'
  import tags from '@/data/blog/tags'

  export default {
    components: { Navbar },

    data () {
      return {
        tags,
        entries: []
      }
    },

    computed: {
      activeTag () {
        return this.$route.params.slug
      }
    },

    watch: {
      activeTag () {
        this.loadEntries()
      }
    },

    created () {
      this.$root.setPageTitle('Blog')

      this.loadEntries()
    },

    methods: {
      loadEntries () {
        this.entries = []

        entries
          .filter(entry => {
            if (!this.activeTag)
              return true

            return entry.tags.indexOf(this.activeTag) >= 0
          })
          .forEach((entry, index) => {
            let column = index % 4

            if (!this.entries[column]) {
              this.entries[column] = []
            }

            this.entries[column].push(entry)

            this.$forceUpdate()
          })
      }
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

    .tags {
      margin-top: 1rem;
    }
  }
</style>
