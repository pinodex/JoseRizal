<template>
  <div class="hero is-dark is-fullheight" :style="style">
    <div class="overlay"></div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-6">
            <h1 class="title">{{ work.title }}</h1>

            <p>{{ work.description }}</p>

            <p class="details-link">
              <router-link :to="{ name: 'works.view', params: { slug: work.slug } }" class="button is-small">
                More Details
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      work: {
        type: Object
      }
    },

    computed: {
      style () {
        return {
          backgroundImage: `url(${this.work.banner})`
        }
      }
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

  .details-link {
    margin-top: 1rem;
  }
</style>
