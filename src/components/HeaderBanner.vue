<template>
  <div class="hero is-dark is-medium hero-header">
    <transition name="fade">
      <div class="background" v-if="backgroundReady" :style="backgroundStyle"></div>
    </transition>

    <div class="overlay"></div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="is-size-1">{{ text }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      background: {
        type: String
      },

      text: {
        type: String
      }
    },

    data () {
      return {
        backgroundReady: false,
        backgroundYOffset: 0
      }
    },

    computed: {
      backgroundStyle () {
        if (!this.backgroundReady) {
          return {}
        }

        return {
          backgroundImage: `url(${this.background})`,
          backgroundPosition: `center ${this.backgroundYOffset}px`
        }
      }
    },

    mounted () {
      let banner = new Image()

      banner.src = this.background
      banner.onload = () => this.backgroundReady = true

      this.$root.$on('scroll', e => {
        this.backgroundYOffset = window.scrollY / 2
      })
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;

    .background, .overlay {
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .background {
      background-size: cover;
      background-position: center;
    }

    .overlay {
      background: rgba(0, 0, 0, 0.75);
    }
  }
</style>
