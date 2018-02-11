<template>
    <transition name="slide-down">
    <nav class="navbar is-dark is-fixed-top" v-show="isNavbarVisible">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#">About José Rizal</a>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        isNavbarVisible: false
      }
    },

    mounted () {
      setTimeout(() => this.isNavbarVisible = true, 200)
    }
  }
</script>

<style lang="scss" scoped>
  .navbar.is-dark {
    background: #bc5d29;
    margin-top: 52px;

    .navbar-menu {
      .navbar-item {
        &.is-active {
          background-color: #924820;
        }

        &:hover {
          background-color: #9f4e23;
        }
      }
    }
  }
</style>
