<template>
  <div class="tablero">
    <div class="container">
      <div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div><div class="brick"></div>      
    </div>
    <div class="ball">

    </div>
    <div class="player">

    </div>
  </div>  
</template>

<script>
export default {
  name: 'Arkanoid',
  data: function () {
    return{
      msg: "Hola mundo"
    }
  }
}
</script>

<style scoped>
  .container{        
    width: 95%;
    height: 30vh; 
    margin: 40px auto;    
    position: relative;    
    overflow: hidden;
    background: grey; 
    display: flex;    
    flex-wrap: wrap;   
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .brick{
    margin: 0 auto;
    min-width: 80px;
    min-height: 20px; 
    background: blue; 
    border: 1px solid black;      
    position: relative;
    flex-basis: auto;    
  }

  .ball{
    bottom: 50px;
    left: 50%;
    width: 20px;
    height: 20px;    
    background: radial-gradient(circle, rgb(253, 215, 0), rgb(165, 140, 0), rgb(110, 94, 0));
    -webkit-box-shadow: 0px 0px 5px 0 #7D7D7D;
    box-shadow: 0px 0px 5px 0 rgb(41, 40, 40);
    border: 0.5px solid rgb(99, 98, 98);
    border-radius: 10px;
    position: absolute;
  }


</style>
