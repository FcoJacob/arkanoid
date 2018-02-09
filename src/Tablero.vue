<template>
  <div id="tablero">    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'tablero'
}
</script>

<style>
#tablero{
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url("./assets/espacio.png");
  border-radius: 5px;
}
</style>
