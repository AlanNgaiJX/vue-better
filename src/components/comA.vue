<template>
  <div class="wrapper">
    <h1>now is comA</h1>
    <button class="btnto" @click="toRoute('/b')">toB</button>
  </div>
</template>

<script>
export default {
  name: "comA",
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    console.log(">>>beforeRouteEnter<<<");
    next();
  },
  beforeRouteUpdated(to, from, next) {
    console.log(">>>beforeRouteUpdated<<<");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(">>>beforeRouteLeave<<<");
    next();
  },
  beforeCreate() {
    console.log("====Now beforeCreate Work====");
  },
  created() {
    console.log("====Now created Work====");
  },
  beforeMount() {
    console.log("====Now beforeMount Work====");
  },
  mounted() {
    console.log("====Now mounted Work====");
    // this.fetchStroageStr();
  },
  beforeUpdate() {
    console.log("====Now beforeUpdate Work====");
  },
  updated() {
    console.log("====Now updated Work====");
  },
  beforeDestroy() {
    console.log("====Now beforeDestroy Work====");
  },
  destroyed() {
    console.log("====Now destroyed Work====");
  },
  activated() {
    console.log("====Now activated Work====");
  },
  deactivated() {
    console.log("====Now deactivated Work====");
  },
  methods: {
    toRoute(r) {
      this.$router.push({name:'comB',params:{isUseCache:false}});
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
}
</style>