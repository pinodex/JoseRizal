<template>
  <section>
    <navbar :collapse="true" :shadow="true"></navbar>
    <header-banner background="/static/img/ocean.jpg" text="Travels"></header-banner>

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

  .hero-header {
    margin-top: 52px;
  }
</style>

<script>
  import Navbar from '@/components/Navbar'
  import HeaderBanner from '@/components/HeaderBanner'

  import content from '@/data/travels/index.md'

  export default {
    components: { Navbar, HeaderBanner },

    data () {
      return { content }
    },

    mounted () {
      this.$root.setPageTitle('Travels')
    }
  }
</script>
