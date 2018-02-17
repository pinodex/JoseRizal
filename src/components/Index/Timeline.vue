<template>
  <div class="hero is-fullheight is-dark">
    <div class="container hero-heading">
      <div class="has-text-centered">
        <h1 class="is-size-1">Hero&lsquo;s Timeline</h1>
      </div>
    </div>

    <div class="timeline" ref="timeline"></div>
  </div>
</template>

<script>
  import vis from 'vis'
  import data from '@/data/timeline'

  export default {
    mounted () {
      let timeline = new vis.Timeline(this.$refs.timeline, data, {

      })
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;

    .hero-heading {
      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;
    }

    .timeline {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
