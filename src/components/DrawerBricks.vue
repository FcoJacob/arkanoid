<template>
  <div class="drawerBricks">
    <div v-for="(levels, index) in level" :key='index'>
        <div :class="{brickDestroy: brick.life == 0}" v-for="(brick, key) in levels" :key='key'>
          <transition
            appear
            appear-active-class="animated zoomIn"
          >
            <div class="brick" :class="{brickDestroy: brick.life == 0, levelBrickOne: brick.life == 1, levelBrickTwo: brick.life == 2, levelBrickThree: brick.life == 3}" @click="destroyBrick(brick)"></div>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drawerBricks',
  data: function () {
    return {
      level: [
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }], // this line with life: 0 means empty space
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
        [{ life: 0 }, { life: 3 }, { life: 3 }, { life: 3 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }, { life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }]
      ],
      life: 0
    }
  },
  computed: {
    deleteBrick () {
      for (let index = 0; index < this.level.length; index++) {
        return this.level[index].filter((level) => level.life !== this.life)
      }
    }
  },
  methods: {
    destroyBrick (brick) {
      brick.life--
    }
  }
}
</script>

<style scoped>
  .drawerBricks{width: 95%;height: 30vh;margin: 40px auto;position: relative;overflow: hidden;display: flex;flex-direction: row-reverse;flex-wrap: wrap;justify-content: center;align-items: center;align-content: center;}
  .brick{margin: 0 auto;width: 80px;height: 24px;position: relative;flex-basis: auto;text-align: center;border: 0.5px solid black;}
  .brickDestroy{visibility:hidden;}
  .levelBrickOne{background-image: url("../assets/brick1.png");background-size: cover;}
  .levelBrickTwo{background-image: url("../assets/brick2.png");background-size: cover;}
  .levelBrickThree{background-image: url("../assets/brick3.png");background-size: cover;}
</style>
