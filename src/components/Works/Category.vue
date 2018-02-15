<template>
  <div class="hero is-fullheight is-black">
    <transition name="fade">
      <div class="background" v-show="backgroundReady" :style="backgroundStyle"></div>
    </transition>

    <div class="overlay"></div>

    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="is-size-1">{{ category.title }}</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    position: relative;

    .background,
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .background {
      background-size: cover;
      background-position: center;
      background-repeat: none;
    }

    .overlay {
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>

<script>
  export default {
    props: {
      category: {
        type: Object
      }
    },

    data () {
      return {
        backgroundReady: false
      }
    },

    computed: {
      backgroundStyle () {
        if (!this.backgroundReady) return {}

        return {
          backgroundImage: `url(${this.category.banner})`
        }
      }
    },

    mounted () {
      let banner = new Image()

      banner.src = this.category.banner
      banner.onload = () => this.backgroundReady = true
    }
  }
</script>
