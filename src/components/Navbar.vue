<template>
  <transition name="slide-down">
    <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation"
      :class="{ 'is-collapsed': isCollapsed, 'has-shadow': isCollapsed }"
      v-show="isNavbarVisible">

      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <img src="/static/img/jose-rizal-vector-200.png" alt="Jose Rizal Face" />
            <img src="/static/img/jose-rizal-signature-400.png" />
          </div>

          <button class="button navbar-burger" @click="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="navbar-menu" :class="{'is-active': isMenuVisible}">
          <button class="delete is-large" @click="hideMenu()"></button>

          <div class="navbar-start">
            <a class="navbar-item is-active" href="/">Home</a>
            <a class="navbar-item" href="/blog">Blog</a>
            <a class="navbar-item" href="/photos">Photos</a>
            <a class="navbar-item" href="/biography">Biography</a>
          </div>

          <div class="navbar-end">
            <a class="navbar-item" href="/about">About</a>
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
      }
    },

    data () {
      return {
        isCollapsed: false,
        isMenuVisible: false,
        isNavbarRevealed: false
      }
    },

    computed: {
      isNavbarVisible () {
        if (!this.animateIn) {
          return true
        }

        return this.isNavbarRevealed
      }
    },

    mounted () {
      setTimeout(() => this.isNavbarRevealed = true, 200)

      this.$root.$on('scroll', () => {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
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
        color: #36b0a9;

        &.is-active {
          color: #1e625e;
        }

        &:hover:not(.is-active) {
          color: #000;
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
          border-width: 2px;
          color: #999;

          &.is-active {
            border-color: #af5726;
            color: #222;
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

        border-bottom: 5px solid transparent;

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
