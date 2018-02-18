<template>
  <transition name="slide-fade">
    <section v-if="work">
      <h2 class="subtitle">Featured Work</h2>

      <entry :work="work" :height="250"></entry>
    </section>
  </transition>
</template>

<script>
  import randomItem from 'random-item'
  import Entry from '@/components/Works/Entry'

  export default {
    components: { Entry },

    data () {
      return {
        work: null
      }
    },

    mounted () {
      import('@/data/works')
        .then(works => this.work = randomItem(works))
    }
  }
</script>
