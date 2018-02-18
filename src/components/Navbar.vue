<template>
  <transition name="slide-down">
    <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation"
      :class="{ 'is-collapsed': isCollapsed, 'has-shadow': hasShadow }"
      v-show="isNavbarVisible">

      <div class="container">
        <router-link :to="{ name: 'index' }" class="navbar-brand">
          <div class="navbar-item">
            <img src="/static/img/jose-rizal-vector-200.png" alt="Jose Rizal Face" />
            <img src="/static/img/jose-rizal-signature-400.png" />
          </div>

          <button class="button navbar-burger" @click="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </router-link>

        <div class="navbar-menu" :class="{'is-active': isMenuVisible}">
          <button class="delete is-large" @click="hideMenu()"></button>

          <div class="navbar-start">
            <router-link v-for="(item, i) in items" class="navbar-item"
              :key="i"
              :class="{ 'is-active': isItemActive(item.route) }"
              :to="{ name: item.route }">
              {{ item.text }}
            </router-link>
          </div>

          <div class="navbar-end">
            <router-link class="navbar-item" :to="{ name: 'about' }">About</router-link>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
  export default {
    props: {
      animateIn: {
        type: Boolean,
        default: false
      },

      collapse: {
        type: Boolean,
        default: false
      },

      shadow: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        isCollapsed: this.collapse,
        isMenuVisible: false,
        isNavbarRevealed: false,

        items: [
          { text: 'Home', route: 'index' },
          { text: 'Biography', route: 'biography' },
          { text: 'Blog', route: 'blog' },
          { text: 'Travels', route: 'travels' },
          { text: 'Works', route: 'works' }
        ]
      }
    },

    computed: {
      isNavbarVisible () {
        if (!this.animateIn) {
          return true
        }

        return this.isNavbarRevealed
      },

      hasShadow () {
        return this.isCollapsed && this.shadow
      }
    },

    mounted () {
      setTimeout(() => this.isNavbarRevealed = true, 200)

      this.$root.$on('scroll', () => {
        if (this.collapse) {
          return
        }

        if (window.scrollY > 1) {
          this.isCollapsed = true

          return
        }

        this.isCollapsed = false
      })
    },

    methods: {
      toggleMenu () {
        this.isMenuVisible = !this.isMenuVisible
      },

      hideMenu () {
        this.isMenuVisible = false
      },

      isItemActive (route) {
        return this.$route.name.indexOf(route) >= 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    z-index: 50 !important;
  }

  .navbar-burger {
    border: none;
    outline: none;
  }

  @media (min-width: 1024px) {
    .container {
      .navbar-brand {
        margin-left: 0;
      }

      .navbar-menu {
        margin-right: 0;
      }
    }

    .navbar {
      background: transparent;

      height: 100px;
      transition: all 0.5s ease;

      .navbar-menu .navbar-item {
        color: #ccc;

        &.is-active {
          color: #fff;
        }

        &:hover:not(.is-active) {
          color: #eee;
        }
      }

      &.is-collapsed {
        background: #fff;
        height: 52px;

        .navbar-brand {
          width: 210px;

          .navbar-item img {
            max-height: 52px;
          }
        }

        .navbar-menu .navbar-item {
          color: #999;

          &.is-active {
            background: #bc5d29 !important;
            color: #fff;
          }

          &:hover:not(.is-active) {
            color: #333;
          }
        }
      }
    }

    .navbar-brand {
      width: 100px;
      overflow: hidden;

      transition: all 0.5s ease;

      .navbar-item {
        padding: 0;

        img {
          transition: all 0.5s ease;
          max-height: 100px;
        }
      }
    }

    .navbar-menu {
      margin-left: 1rem;

      .delete {
        display: none;
      }

      .navbar-item {
        font-family: 'Open Sans';
        text-transform: uppercase;
        letter-spacing: 2px;

        color: #999;

        transition: all 0.5s ease;

        &.is-active {
          color: #222;
        }

        &:hover {
          color: #111;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    .navbar-menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-height: 100% !important;

      background: #222;
      text-align: center;

      .delete {
        position: fixed;
        top: 0.75rem;
        right: 0.75rem;
      }

      .navbar-start {
        margin-top: 3rem;
      }

      .navbar-item {
        color: #eee;

        &.is-active {
          background: #111;
          color: #fff;
        }

        &:hover {
          background: #333;
        }
      }
    }
  }
</style>
