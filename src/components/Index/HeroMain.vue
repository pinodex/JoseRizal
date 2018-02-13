<template>
  <section class="hero-body">
    <div class="background">
      <div class="image"></div>

      <transition name="slide-fade-slow">
        <div class="video" v-show="isVideoBgVisible">
          <video ref="bgVideo" autoplay loop></video>
        </div>
      </transition>

      <div class="overlay"></div>
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

    .image,
    .video,
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .image {
      background: url(/static/img/hero-bg.jpg);
      background-position: center;
      background-size: cover;
    }

    .video {
      overflow: hidden;

      video {
        object-fit: cover;
        height: 100%;
        width: 100%;

        font-family: 'object-fit: cover;';
      }
    }

    .overlay {
      background: rgba(105, 52, 23, 0.5);
    }
  }

  .welcome-text {
    .start {
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 4rem;

      color: #fff;
    }

    .name {
      display: inline-block;

      font-family: 'Oswald';
      font-weight: bold;
      font-size: 5rem;

      background: #fff;
      color: #000;

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
  import objectFitPolyfill from 'object-fit-videos'

  export default {
    data () {
      return {
        isWelcomeTextVisible: false,
        isVideoBgVisible: false
      }
    },

    created () {
    },

    mounted () {
      setTimeout(() => this.isWelcomeTextVisible = true, 200)

      this.loadBgVideo()
    },

    methods: {
      loadBgVideo () {
        let xhr = new XMLHttpRequest()

        xhr.open('GET', '/static/video/hero-bg.mp4', true)
        xhr.responseType = 'arraybuffer'

        xhr.onload = e => {
          if (e.target.status === 200) {
            let type = 'video/mp4',
                blob = new Blob([e.target.response], { type }),
                url = URL.createObjectURL(blob)

            this.$refs.bgVideo.setAttribute('src', url)

            objectFitPolyfill()

            this.isVideoBgVisible = true
          }
        }

        xhr.send()
      }
    }
  }
</script>
