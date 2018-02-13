<template>
  <div id="tablero">
    <drawerBricks></drawerBricks>
    <ball></ball>
    <player></player>
  </div>
</template>

<script>
import DrawerBricks from './components/DrawerBricks'
import Ball from './components/Ball'
import Player from './components/Player'

export default {
  name: 'tablero',
  components: {
    DrawerBricks,
    Ball,
    Player
  }
}
</script>

<style scoped>
  #tablero{width: 100%;height: 100vh;position: absolute;background-image: url("./assets/espacio.png");border-radius: 5px;}
</style>
