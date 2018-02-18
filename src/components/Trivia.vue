<template>
  <transition name="slide-fade">
    <section v-if="trivia">
      <h2 class="subtitle did-you-know">Did you know?</h2>
      <div class="content" v-if="trivia">
        <p>{{ trivia }}</p>
      </div>
    </section>
  </transition>
</template>

<script>
  import randomItem from 'random-item'

  export default {
    data () {
      return {
        trivia: null
      }
    },

    mounted () {
      import('@/data/trivia')
        .then(trivias => this.trivia = randomItem(trivias))
    }
  }
</script>
