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
                  The National Hero of the Philippines and pride of the Malayan Race. He was born on June 19, 1861 in the town of Calamba, Laguna.
                </p>

                <p>
                  He was the seventh child in a family of 11 children (2 boys, 9 girls) of <strong>Francisco Mercado Rizal</strong> and <strong>Teodora Alonzo y Quintos</strong>.
                </p>

                <p>
                  Baptized by Rev. Ruffino Collantes at the Catholic of Calamba with Rev. Pedro Casanas as sponsor on June 22, 1861.
                </p>
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
                  <span class="year-marker">1864-1865</span> Rizal learned the alphabet from his mother at the age of three. However, his sister <strong>Conception</strong>, the eighth child in the family died at the age of three when Rizal was four years old. He remembered himself having shed real tears for the first time.
                </p>

                <p>
                  <span class="year-marker">1865</span> His mother taught him how to read and write, while his father hired Leon Monroy to teach Rizal the rudiments of Latin.
                </p>

                <p>
                  <span class="year-marker">1868</span> Rizal made a pilgrimage to Antipolo with his father to fulfill the vow of his mother to take the child to the Shrine of the Virgin of Antipolo.
                </p>

                <p>
                  They proceeded to Manila and visited his sister Saturnina who was at the time studying in the La Concordia College in Sta. Ana.
                </p>

                <p>
                  <span class="year-marker">1869</span> At the age of eight, Rizal wrote his first poem entitled &ldquo;Sa Aking Mga Kabata.&rdquo; The poem was written in tagalog and had for its theme &ldquo;Love of One&rsquo;s Language.&rdquo;
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

  .year-marker {
    font-weight: bold;
    color: #999;
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
      this.$root.setPageTitle('Biography')

      this.$root.$on('scroll', e => {
        this.bgOffset = (window.scrollY / 2) * -1
      })
    }
  }
</script>
