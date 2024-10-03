<template>
  <div class="analog-clock">
    <div class="analog-clock-face">
      <div class="dots"></div>
      <div class="dots"></div>
      <div class="dots"></div>
      <div class="dots"></div>
      <div class="dots"></div>
      <div class="dots"></div>
      <!-- <div v-bind:style="{ transform: `rotate(${hourDeg}deg)` }" class="hand hour-hand"></div>
          <div v-bind:style="{ transform: `rotate(${minDeg}deg)` }" class="hand min-hand"></div> -->
      <div v-bind:style="{ transform: `rotate(${secDeg}deg)` }" class="hand sec-hand"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  time: Object
})

const zeroPadded = (num: any) => {
  if (num < 10) {
    return `0${num}`
  }
  return num
}

const secDeg = computed(() => (zeroPadded(props.time?.getSeconds()) / 60) * 360 + 90)
// const minDeg = ref((props.time?.date.getSeconds() / 60) * 360 + (sec / 60) * 6 + 90)
// const hourDeg = ref((props.time?.date.getSeconds() / 12) * 360 + (min / 60) * 30 + 90)
</script>

<style>
/* ==================
 *  VARIABLES
 * ================== */
:root {
  --color-black: hsl(0, 0%, 30%);
  --color-black-light: hsl(0, 0%, 60%);
  --color-gray: hsl(0, 0%, 90%);
  --color-white: hsl(0, 0%, 98%);

  --color-red: hsl(348, 100%, 61%);
  --color-orange: hsl(34, 100%, 50%);
  --color-green: hsl(123, 80%, 19%);

  --color-yellow-inverse: hsl(48, 100%, 77%);
  --color-red-inverse: hsl(0, 97%, 34%);
  --color-orange-inverse: hsl(34, 100%, 70%);
}
/* ==================
 *  BASE
 * ================== */
body {
  font-family: 'Open Sans Condensed', sans-serif;
  color: var(--color-black);
}
.outer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
}
/* ==================
 *  Analog Clock
 * ================== */

/* *** CLOCK *** */

.analog-clock {
  border: 10px solid var(--color-green);
  margin: 0 auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
}
.analog-clock-face {
  height: 100%;
  transform: translateY(50%);
}
.analog-clock-face::before {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  background: white;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  border: 2px solid var(--color-red-inverse);
  border-radius: 50%;
}

/* *** DOTS *** */

.dots:nth-of-type(1) {
  transform: rotate(0deg);
}
.dots:nth-of-type(2) {
  transform: rotate(90deg);
}
.dots:nth-of-type(3) {
  transform: rotate(30deg);
}
.dots:nth-of-type(4) {
  transform: rotate(60deg);
}
.dots:nth-of-type(5) {
  transform: rotate(120deg);
}
.dots:nth-of-type(6) {
  transform: rotate(150deg);
}
.dots::before,
.dots::after {
  content: '';
  position: absolute;
  background: var(--color-red-inverse);
  width: 7px;
  height: 2px;
  border-radius: 30px;
  top: -3px;
}
.dots::after {
  left: 7px;
}
.dots::before {
  right: 7px;
}
.dots:nth-of-type(1)::before,
.dots:nth-of-type(1)::after,
.dots:nth-of-type(2)::before,
.dots:nth-of-type(2)::after {
  background: var(--color-red);
  width: 10px;
  height: 4px;
}

/* *** HAND *** */

.hand {
  background: var(--color-black-light);
  transform-origin: 100%;
  border-radius: 10px;
  position: absolute;
  right: 50%;
}
.hand.hour-hand {
  width: 25%;
  height: 5px;
  background: var(--color-black);
  z-index: 1;
}
.hand.min-hand {
  width: 37%;
  height: 4px;
}
.hand.sec-hand {
  background: var(--color-green);
  width: 39%;
  height: 2px;
}
</style>
