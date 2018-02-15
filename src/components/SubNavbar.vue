<template>
  <transition name="slide-down">
    <nav class="navbar is-dark has-shadow is-fixed-top" v-show="isNavbarVisible">
      <div class="container">
        <div class="navbar-brand" v-if="activeItem">
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
                :class="{ 'is-active': isItemActive(item) }"
                :to="{ name: item.route, params: (item.params || {}) }">

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
      },

      autoActive: {
        type: Boolean,
        default: true
      },

      animateIn: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        isNavbarVisible: !this.animateIn,
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
      isItemActive (item) {
        if (this.autoActive) {
          return this.$route.name == item.route
        }

        return item.active
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
          background-color: transparent;
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
