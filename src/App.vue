<template>
  <div id="app">
    <router-view />

    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<style>
  img {
    image-rendering: crisp-edges;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-slow-enter-active {
    transition: all 1s ease;
  }

  .slide-fade-slow-leave-active {
    transition: all 1.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-slow-enter,
  .slide-fade-slow-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-up-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-up-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-up-fade-enter,
  .slide-up-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all .3s ease;
  }

  .slide-down-enter,
  .slide-down-leave-to {
    transform: translateY(-100px);
    opacity: 0;
  }
</style>

<script>
  export default {
    name: 'App',

    created () {
      window.addEventListener('scroll', e => {
        this.$root.$emit('scroll', e)
      })
    }
  }
</script>
