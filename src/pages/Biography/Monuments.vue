<template>
  <section class="page">
    <header-banner background="/static/img/rizal-park.jpg" text="Monuments"></header-banner>

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
  import content from '@/data/biography/monuments.md'

  export default {
    components: { HeaderBanner },

    data () {
      return { content }
    },

    mounted () {
      this.$root.setPageTitle('Monuments')
    }
  }
</script>
