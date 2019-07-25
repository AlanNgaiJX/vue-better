<template>
  <div class="wrapper">
    <h1>now is comB</h1>
    <h2>stroageStr in comB..{{stroageStr}}</h2>
    <button @click="fetchStroageStr()" class="btn-fetch">click here , fetch new stroageStr</button>
    <button class="btn-destroy" @click="destroyMyself">click Here , i will destroy myself</button>
    <button class="btnto" @click="toRoute('/c')">toC</button>
    <button class="btnback" @click="back">back</button>
  </div>
</template>

<script>
export default {
  name: "comB",
  props: {
    modelData: String
  },
  data() {
    return {
      stroageStr: ""
    };
  },
  beforeRouteEnter (to, from, next) {
    console.log(">>>beforeRouteEnter<<<");
    const isUseCache = to.meta.isUseCache;
    next((vm)=>{
      if (!isUseCache) {
        console.log("不使用缓存，重新获取数据");
        vm.fetchStroageStr();
      }else{
        to.meta.isUseCache = false;
      }
    });
  },
  beforeRouteUpdated(to, from, next){
    console.log(">>>beforeRouteUpdated<<<");
    next();
  },
  beforeRouteLeave (to, from, next) {
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
    destroyMyself() {
      console.log("===执行vm.$destroy销毁===");
      this.$destroy();
    },
    fetchStroageStr() {
      this.stroageStr = localStorage.getItem("testNo.1");
    },
    toRoute(r) {
      this.$router.push(r);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="" scoped>
.wrapper {
  border: 2px solid black;
}
.btn-destroy {
  background-color: red;
  color: white;
}
.btn-fetch {
  background-color: pink;
}
.btnto {
  background-color: blue;
  color: white;
}
.btnback {
  background-color: green;
  color: white;
}
</style>