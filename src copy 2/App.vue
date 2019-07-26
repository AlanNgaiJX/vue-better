<template>
  <div id="app">
    <h1>test No.1：探讨keep-alive</h1>

    <!-- 使用了keep-alive -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>-->

    <keep-alive include="comB">
      <router-view ></router-view>
    </keep-alive>
    <p>now stroageStr = {{stroageStr}}</p>
    <button class="btn" @click="switchCom = !switchCom">turn-Com</button>
    <button class="btn" @click="initStroageStr">initStroage</button>
    <button class="btn" @click="changeStroageStr">changeStroage</button>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      switchCom: true,
      stroageStr: localStorage.getItem("testNo.1")
    };
  },
  methods: {
    initStroageStr() {
      localStorage.setItem("testNo.1", "123");
      this.stroageStr = localStorage.getItem("testNo.1");
    },
    changeStroageStr() {
      localStorage.setItem("testNo.1", localStorage.getItem("testNo.1") + "/");
      this.stroageStr = localStorage.getItem("testNo.1");
    }
  },
  computed: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 14px;
}
.btn {
  margin-top: 20px;
  line-height: 30px;
  color: white;
  background-color: blueviolet;
  text-align: center;
}
</style>
