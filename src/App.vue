<template>
  <div id="app">
    <HelloWorld :numData="numData"></HelloWorld>
    ----------------------------------------------

    <div>
      <button @click="show = !show">toggle</button>
      <transition name="example_1">
        <p v-if="show">hello</p>
      </transition>
    </div>
    ----------------------------------------------

    <div>
      <button @click="a_show = !a_show">toggle</button>
      <transition name="example_2">
        <p v-if="a_show">
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
        </p>
      </transition>
    </div>

    --------------------------------------------------
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      show: true,
      a_show: true,
      numData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      nextTickText: 'hhh'
    }
  },
  methods: {
    nextTickMethod() {
      this.nextTickText = 'www'
      console.log(this.nextTickText === 'www')
    }
  },
  computed:{},
  created() {
    this.$nextTick(() => {
      this.nextTickMethod()
    })
  }
}
</script>

<style>
/* 设置开始和结束时的状态,即通过v-if元素插入前和元素离开后的状态 */
/* transform 设置位置 =>从哪里进入/从哪里移出, 进入后的状态就是v-if=true的状态,移出后的状态就是v-if=false的状态 */
.example_1-enter,
.example_1-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* 设置元素插入或删除的过渡过程中的过渡属性和样式 */
.example_1-enter-active,
.example_1-leave-active {
  transition: all 1s linear;
}

.example_2-enter-active {
  animation: a_show_animation 2s linear;
}
.example_2-leave-active {
  animation: a_show_animation 2s linear reverse;
}
@keyframes a_show_animation {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(0);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
