<template>
  <transition name="slide-fade">
    <div class="columns is-mobile" v-if="quote">
      <div class="column is-3">
        <figure class="image">
          <img src="/static/img/jose-rizal.jpg">
        </figure>
      </div>

      <div class="column is-vcentered">
        <div class="content" v-if="quote">
          <h1 class="is-size-4">Rizal said</h1>

          <blockquote>{{ quote }}</blockquote>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import randomItem from 'random-item'

  export default {
    data () {
      return {
        quote: null
      }
    },

    mounted () {
      import('@/data/quotations.json')
        .then(quotations => this.quote = randomItem(quotations.default))
    }
  }
</script>

<style lang="scss" scoped>
  .is-vcentered {
    display: flex;
    align-items: center;
  }
</style>
