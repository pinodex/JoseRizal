<template>
  <section>
    <header-banner background="/static/img/books.jpg" text="Education"></header-banner>

    <div class="container main-content">
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
  .main-content {
    margin-top: 2rem;
  }
</style>

<script>
  import HeaderBanner from '@/components/HeaderBanner'
  import content from '@/data/biography/education.md'

  export default {
    components: { HeaderBanner },

    data () {
      return { content }
    },

    mounted () {
      this.$root.setPageTitle('Education')
    }
  }
</script>
