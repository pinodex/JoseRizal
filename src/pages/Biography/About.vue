<template>
  <section>
    <div class="hero is-black is-fullheight about-heading">
      <div class="background" :style="bgStyle"></div>

      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <h1 class="is-size-1">About José Rizal</h1>

              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero is-light is-bold is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8">
              <h1 class="title">Childhood</h1>

              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column is-4">
              <h1 class="is-size-1">Next</h1>

              <p class="is-size-4">
                <router-link :to="{ name: 'biography.family' }">
                  José Rizal&lsquo;s Family
                </router-link>
              </p>

              <br />

              <p>Learn about the family of Rizal, from his grandparents to his siblings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about-heading {
    overflow: hidden;
    position: relative;

    .background {
      background: url(/static/img/Rizal-Portrait.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom right;

      position: absolute;
      top: 150px;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        bgOffset: 0
      }
    },

    computed: {
      bgStyle () {
        return {
          right: `${this.bgOffset}px`
        }
      }
    },

    mounted () {
      this.$root.$on('scroll', e => {
        this.bgOffset = (window.scrollY / 2) * -1
      })
    }
  }
</script>
