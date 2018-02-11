<template>
    <transition name="slide-down">
    <nav class="navbar is-dark has-shadow is-fixed-top" v-show="isNavbarVisible">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            {{ activeItem.text }}
          </div>

          <button class="button navbar-burger" @click="toggleMenu()">
            <div class="arrow"></div>
          </button>
        </div>

        <div class="navbar-menu" :class="{'is-active': isMenuVisible}" @click="isMenuVisible = false">
          <div class="navbar-start">
            <template v-for="(item, i) in items">
              <router-link v-if="item.route" class="navbar-item"
                :class="{ 'is-active': isItemActive(item.route) }"
                :to="{ name: item.route }">

                {{ item.text }}
              </router-link>

              <a v-else class="navbar-item"
                :class="{ 'is-active': item.active }"
                :href="item.action">

                {{ item.text }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: []
      }
    },

    data () {
      return {
        isNavbarVisible: false,
        isMenuVisible: false
      }
    },

    computed: {
      activeItem () {
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].route == this.$route.name) {
            return this.items[i]
          }

          if (this.items[i].active) {
            return this.items[i]
          }
        }
      }
    },

    mounted () {
      setTimeout(() => this.isNavbarVisible = true, 200)
    },

    methods: {
      isItemActive (route) {
        return this.$route.name == route
      },

      toggleMenu () {
        this.isMenuVisible = !this.isMenuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar.is-dark {
    background: #bc5d29;
    margin-top: 52px;

    @media (min-width: 1023px) {
      .navbar-brand {
        display: none;
      }
    }

    .navbar-burger {
      background: transparent;
      border: none;
      outline: none;
    }

    .navbar-menu {
      background: #bc5d29;

      .navbar-item {
        color: #e8b396;

        &.is-active {
          background-color: #924820;
          color: #fff;
        }

        &:hover:not(.is-active) {
          background-color: transparent;
          color: #fff;
        }
      }
    }
  }

  .arrow {
    width: 0;
    height: 0;

    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff;

    margin-left: 7px;
  }
</style>
