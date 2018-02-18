<template>
  <section>
    <navbar></navbar>

    <header-banner background="/static/img/buildings.jpg" text="About This Website"></header-banner>

    <div class="container main-content">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="content">
            <p>
              Republic Act No. 1425 or the Rizal Law mandates all schools in the Philippines to teach courses about the Life, Works, and Writings of Jose Rizal.
            </p>

            <p>
              This website is part of the school project for our Rizal course. The following are the people involved in the development of this website:
            </p>

            <p>
              <ul>
                <li>Manalastas, Zeaven Jovertte</li>
                <li>Manaog, Andrea Mae</li>
                <li>Marco, Raphael</li>
                <li>Matias, Mark Christian</li>
                <li>Mozol, Erra Mae</li>
                <li>Neria, Danreina</li>
                <li>Pantanosas, Vanessa</li>
                <li>Pelagio, Arjay</li>
                <li>Peralta, Jan Raphael</li>
              </ul>
            </p>

            <p>
              This website contains several artworks, images, and texts from different sources and authors. They are the properties of their respective owners. The materials used in this website are for educational purposes only.
            </p>

            <h3 class="subtitle">Credits</h3>

            <p>
              <strong><a href="https://fernantadeo.deviantart.com/" target="_blank">@fernantadeo</a></strong> - Jose Rizal artwork used as the logo.

              <em>[<a href="https://fernantadeo.deviantart.com/art/Philippine-National-Hero-Jose-Rizal-503055771" target="_blank">link</a>]</em>
            </p>

            <p>
              <strong><a href="https://fineartamerica.com/profiles/antonio-magdaraog.html" target="_blank">Tony Magdaraog</a></strong> - Luneta at Night photograph used in the home page.

              <em>[<a href="https://fineartamerica.com/featured/luneta-at-night-tony-magdaraog.html" target="_blank">link</a>]</em>
            </p>

            <p>
              <strong><a href="https://www.youtube.com/channel/UC_hzKB5jgqRKzhX4-LL7Bxw" target="_blank">Have Camera Will Travel</a></strong> - Aerial shot of Luneta used in the home page.

              <em>[<a href="https://www.youtube.com/watch?v=l46P8R-Vt-g" target="_blank">link</a>]</em>
            </p>

            <h3 class="subtitle">References</h3>

            <p>
              <a href="http://joserizal.ph" target="_blank">Jose Rizal website by Jose Rizal University</a>
            </p>

            <p>
              <a href="http://knightsofrizal.org" target="_blank">Order of the Knights of Rizal</a>
            </p>

            <p>
              <a href="http://www.filipinaslibrary.org.ph" target="_blank">Filipinas Heritage Library</a>
            </p>

            <p>
              <a href="http://dipologcity.com" target="_blank">Dipolog City website</a>
            </p>

            <p>
              <a href="https://kahimyang.com/" target="_blank">The Kahimyang Project</a>
            </p>

            <h3 class="subtitle">Open Source</h3>

            <p>
              The source code for this website is available at this <a href="https://github.com/pinodex/JoseRizal" target="_blank">repository</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import HeaderBanner from '@/components/HeaderBanner'

  export default {
    components: { Navbar, HeaderBanner },

    created () {
      this.$root.setPageTitle('About')
    }
  }
</script>

<style lang="scss" scoped>
  .hero-header {
    margin-top: 0;
  }

  .main-content {
    margin-top: 1rem;
  }
</style>
