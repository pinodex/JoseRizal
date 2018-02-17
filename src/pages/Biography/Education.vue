<template>
  <section>
    <div class="hero is-dark hero-header is-medium">
      <div class="overlay"></div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="is-size-1">Education</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <component :is="content"></component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero-header {
    background-image: url(/static/img/books.jpg);
    margin-bottom: 2rem;
  }
</style>

<script>
  import content from '@/data/biography/education.md'

  export default {
    data () {
      return { content }
    }
  }
</script>
