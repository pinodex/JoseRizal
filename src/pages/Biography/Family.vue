<template>
  <section>
    <div class="container">
      <h1 class="title">Welcome to José Rizal's Family Visualizer</h1>

      <div ref="graph"></div>
    </div>
  </section>
</template>

<script>
  import family from '@/data/family.json'

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
