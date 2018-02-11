<template>
  <div class="clouds">
    <div v-for="cloud in clouds" :style="cloud.style" class="cloud"></div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import random from 'random-number'

  const textures = [
    '/static/img/clouds/cloud-1.svg',
    '/static/img/clouds/cloud-2.svg',
    '/static/img/clouds/cloud-3.svg',
    '/static/img/clouds/cloud-4.svg'
  ]

  class Cloud {
    constructor (x, y, size, texture) {
      this.x = x
      this.y = y
      this.size = size
      this.texture = texture
    }

    get style () {
      return {
        position: 'absolute',
        top: `${this.y}%`,
        left: `${this.x}%`,
        height: `${this.size}px`,
        width: `${this.size}px`,
        background: `url(${this.texture})`,
        backgroundSize: 'cover',
        opacity: '0.5'
      }
    }
  }

  export default {
    data () {
      return {
        clouds: []
      }
    },

    mounted () {
      this.initialize()
      this.animate()
    },

    methods: {
      getRandomTexture () {
        let i = random({ min: 0, max: textures.length - 1, integer: true })

        return textures[i]
      },

      getRandomCoordinates () {
        return random({ min: 0, max: 100, integer: true })
      },

      initialize () {
        for (var i = 0; i < 10; i++) {
          let x = this.getRandomCoordinates(),
              y = this.getRandomCoordinates(),
              texture = this.getRandomTexture(),
              size = 100

          this.clouds.push(new Cloud(x, y, size, texture))
        }
      },

      animate () {
        for (var i = 0; i < this.clouds.length; i++) {
          if (this.clouds[i].x < -10) {
            this.clouds[i].texture = this.getRandomTexture()
            this.clouds[i].y = this.getRandomCoordinates()
            this.clouds[i].x = 110

            continue
          }

          this.clouds[i].x -= 0.05
        }

        requestAnimationFrame(this.animate)
      }
    }
  }
</script>
