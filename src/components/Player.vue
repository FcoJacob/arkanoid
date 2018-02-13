<template>
  <div class="player" :style="{left: left+'%'}"></div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      left: 44
    }
  },
  mounted: function () {
    this.movePlayer()
  },
  methods: {
    movePlayer: function () {
      window.onkeydown = function (event) {
        if (event.keyCode === 37) {
          this.left--
          console.log(event.code)
        } else if (event.keyCode === 39) {
          this.left++
          console.log(event.code)
        }
      }
    }
  }
}
</script>

<style scoped>
  .player{bottom: calc(48px - 12.5px);width: 150px;height: 25px;position: relative;background-image: url("../assets/player.png");background-size: cover;position: absolute;}
</style>
