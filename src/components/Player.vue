<template>
  <div class="player" :style="{left: left+'%'}" v-on:click="moveLeft()"></div>
</template>

<script>
export default {
  name: 'player',
  data: function () {
    return {
      left: 44
    }
  },
  methods: {
    moveLeft () {
      console.log('Izquierda')
      this.left -= 1
    },
    moveRight () {
      console.log('Derecha')
      this.left += 1
    }
  }
}
</script>

<style scoped>
  .player{bottom: calc(48px - 12.5px);left: calc(50% - 75px);width: 150px;height: 25px;position: relative;background-image: url("../assets/player.png");background-size: cover;position: absolute;}
</style>
