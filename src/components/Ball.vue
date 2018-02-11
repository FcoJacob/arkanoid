<template>
    <div class="ball"></div>
</template>

<script>
export default {
  name: 'ball',
  data: function () {
    return {
      msg: 'Bienvenido al Arkanoid'
    }
  }
}
</script>

<style scoped>
  .ball{bottom: calc(70px - 10px);left: calc(50% - 10px);width: 20px;height: 20px;background: radial-gradient(circle, rgb(253, 215, 0), rgb(165, 140, 0), rgb(110, 94, 0));-webkit-box-shadow: 0px 0px 5px 0 #7D7D7D;box-shadow: 0px 0px 5px 0 rgb(41, 40, 40);border: 0.5px solid rgb(99, 98, 98);border-radius: 10px;position: absolute;}
</style>
