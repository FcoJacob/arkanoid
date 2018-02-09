<template>
  <div class="drawerBricks">
    <div class="brick"></div>
  </div>
</template>

<script>
export default {
  name: 'drawerBricks',
  data: function () {
    return {
      msg: 'Bienvenido al Arkanoid'
    }
  }
}
</script>

<style>
  .drawerBricks{width: 95%;height: 30vh;margin: 40px auto;position: relative;overflow: hidden;background: grey;display: flex;flex-wrap: wrap;align-content: center;}
  .brick{margin: 0 auto;min-width: 60px;max-height: 20px;background: blue;border: 1px solid black;position: relative;flex-basis: auto;}
</style>
