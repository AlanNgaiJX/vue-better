<template>
  <div class="wrapper">
    <h1>now is comB, Q:{{q}}</h1>
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
      stroageStr: "",
      q: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter work");

    let cacheQueue = to.meta.cacheQueue;
    const fullPath = to.fullPath;
    next(vm => {
      vm.q = to.query.bNum;

      if (!cacheQueue.includes(fullPath)) {
        vm.fetchStroageStr();
        if (cacheQueue.length >= 3) {
          cacheQueue.shift();
          cacheQueue.push(fullPath);
        } else {
          cacheQueue.push(fullPath);
        }
        console.log(cacheQueue);
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
    console.log("beforeRouteUpdate work");
  },
  beforeRouteLeave(to, from, next) {
    next();
    console.log("beforeRouteLeave work");
  },
  beforeCreate() {
    console.log("beforeCreate work");
  },
  created() {
    console.log("created work");
  },
  beforeMount() {
    console.log("beforeMount work");
  },
  mounted() {
    console.log("mounted work");
  },
  beforeUpdate() {
    console.log("beforeUpdate work");
  },
  updated() {
    console.log("updated work");
  },
  activated() {
    console.log("activated work");
  },
  deactivated() {
    console.log("deactivated work");
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