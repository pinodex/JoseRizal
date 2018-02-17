<template>
  <div class="entry" :style="style">
    <transition name="fade">
      <div :style="backgroundStyle" v-if="backgroundReady" class="background"></div>
    </transition>

    <div class="overlay"></div>

    <div class="contents has-text-centered">
      <div>
        <h1 class="title">{{ work.title }}</h1>

        <p>
          <router-link :to="{ name: 'works.view', params: { slug: work.slug } }"
            class="button is-light is-outlined">View</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      work: {
        type: Object
      },

      height: {
        type: Number,
        default: 300
      }
    },

    data () {
      return {
        backgroundReady: false
      }
    },

    computed: {
      style () {
        return {
          height: `${this.height}px`
        }
      },

      backgroundStyle () {
        if (!this.backgroundReady) {
          return {}
        }

        return {
          backgroundImage: `url(${this.work.banner})`
        }
      }
    },

    mounted () {
      let banner = new Image()

      banner.src = this.work.banner
      banner.onload = () => this.backgroundReady = true
    }
  }
</script>

<style lang="scss" scoped>
  .entry {
    position: relative;

    .overlay,
    .background,
    .contents {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .overlay {
      background: rgba(0, 0, 0, 0.5);
    }

    .background {
      background-position: center;
      background-size: cover;
    }

    .contents {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        color: #fff;
      }
    }
  }
</style>
