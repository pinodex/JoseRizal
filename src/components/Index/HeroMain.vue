<template>
  <section class="hero-body">
    <div class="background">
      <div class="sky"></div>

      <transition name="slide-up-fade">
        <div class="grass" v-show="isWelcomeTextVisible"></div>
      </transition>

      <transition name="fade">
        <clouds v-show="isWelcomeTextVisible"></clouds>
      </transition>
    </div>

    <div class="container">
      <transition name="slide-fade">
        <div class="welcome-text" v-show="isWelcomeTextVisible">
          <p class="start">Welcome to</p>
          <p class="name">Jose Rizal Online</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .background {
    z-index: -1;

    .sky {
      background: #bdebe9;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .grass {
      background: #adc644;

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      height: 5rem;
    }

    /deep/ .clouds {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      height: 35vh;
    }
  }

  .welcome-text {
    .start {
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 3rem;
    }

    .name {
      display: inline-block;

      font-family: 'Oswald';
      font-weight: bold;
      font-size: 4rem;

      background: #fff;
      padding: 0 1rem;
    }

    @media (max-width: 1023px) {
      .start {
        font-size: 2rem;
      }

      .name {
        font-size: 3rem;
      }
    }

    @media (max-width: 767px) {
      text-align: center;
    }
  }
</style>

<script>
  import Clouds from './Clouds'

  export default {
    components: { Clouds },

    data () {
      return {
        isWelcomeTextVisible: false
      }
    },

    mounted () {
      setTimeout(() => this.isWelcomeTextVisible = true, 200)
    }
  }
</script>
