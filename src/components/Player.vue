<template>
  <div class="player" :style="{left: left+'%'}">
    <div id="x">{{ x }}</div>
    <div id="y">{{ y }}</div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data: function () {
    return {
      left: 44,
      x: '',
      y: ''
    }
  },
  mounted: function () {
    this.moveMouse()
  },
  methods: {
    moveMouse: function (event) {
      event = event || window.event
      this.x = window.event.clientX
      this.y = window.event.clientY
    },
    keyDownHandler: function (e) {
      if (e.keyCode === 37) {
        this.left -= 1
      } else if (e.keyCode === 39) {
        this.left += 1
      }
    }
  }
}
</script>

<style scoped>
  .player{bottom: calc(48px - 12.5px);left: 50%;width: 150px;height: 25px;position: relative;background-image: url("../assets/player.png");background-size: cover;position: absolute;}
</style>
