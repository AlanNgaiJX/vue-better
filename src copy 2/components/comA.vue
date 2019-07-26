<template>
  <div class="wrapper">
    <h1>now is comA</h1>
    <ul>
      <li class="btnto" @click="toRoute(1)">1</li>
      <li class="btnto" @click="toRoute(2)">2</li>
      <li class="btnto" @click="toRoute(3)">3</li>
      <li class="btnto" @click="toRoute(4)">4</li>
      <li class="btnto" @click="toRoute(5)">5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "comA",
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // console.log(">>>beforeRouteEnter<<<");
    next();
  },
  methods: {
    toRoute(num) {
      this.$router.push({name:'comB',query:{bNum:num}});
    }
  }
};
</script>

<style lang="" scoped>
.wrapper {
  border: 2px solid black;
}
.btnto {
  background-color: blue;
  color: white;
  margin-top: 10px;
}
</style>