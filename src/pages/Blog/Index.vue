<template>
  <section>
    <navbar :collapse="true" :shadow="true"></navbar>

    <div class="container main-container">
      <div class="columns">
        <div class="column" v-for="column in entries">
          <div class="card entry" v-for="entry in column">
            <figure class="image" v-if="entry.banner">
              <img :src="entry.banner" />
            </figure>

            <div class="details">
              <h2 class="name">
                <router-link v-html="entry.title" :to="{ name: 'blog.entry', params: { slug: entry.slug } }"></router-link>
              </h2>

              <p class="description" v-html="entry.description"></p>
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

  export default {
    components: { Navbar },

    data () {
      return {
        entries: []
      }
    },

    created () {
      this.$root.setPageTitle('Blog')

      entries.forEach((entry, index) => {
        let column = index % 3

        if (!this.entries[column]) {
          this.entries[column] = []
        }

        this.entries[column].push(entry)

        this.$forceUpdate()
      })
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
</style>
