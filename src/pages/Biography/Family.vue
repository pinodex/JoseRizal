<template>
  <section>
    <div class="container">
      <h1 class="title">Welcome to José Rizal's Family Visualizer</h1>

      <div ref="graph"></div>
    </div>
  </section>
</template>

<script>
  import _ from 'lodash'
  import * as d3 from 'd3'
  import dTree from 'd3-dtree'

  import family from '@/data/family.json'

  window.d3 = d3

  export default {
    components: { },

    data () {
      return {
        family
      }
    },

    mounted () {

    }
  }
</script>
