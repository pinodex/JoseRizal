<template>
  <section>
    <navbar :collapse="true" :shadow="false"></navbar>

    <div class="hero is-fullheight is-dark">
      <div class="timeline" ref="timeline"></div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'

  import vis from 'vis'
  import data from '@/data/timeline'

  export default {
    components: { Navbar },

    mounted () {
      this.$root.setPageTitle('Timeline')

      let timeline = new vis.Timeline(this.$refs.timeline, data, {
          min: '1860',
          max: '1900',
          zoomMin: 864000000,
          maxHeight: window.innerHeight - 52,
          selectable: false
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
      z-index: 10;
    }

    .timeline {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  ::v-deep {
    .vis-timeline {
      border: none;
    }

    .vis-time-axis .vis-text {
      color: #fff;
    }
  }
</style>
