<template>
  <div class="player" :style="{left: lefts+'%'}">&nbsp;</div>
</template>

<script>
export default {
  name: 'player',
  data: function () {
    return {
      lefts: 44
    }
  },
  methods: {
    moveLeft: function () {
      this.lefts = this.lefts - 1
    }
  }
}
</script>

<style scoped>
  .player{bottom: calc(48px - 12.5px);left: calc(50% - 75px);width: 150px;height: 25px;position: relative;background-image: url("../assets/player.png");background-size: cover;position: absolute;}
</style>
