<template>
  <div class="wrapper">
    <h1>now is comB</h1>
    <h2>{{stroageStr}}</h2>
    <button @click="fetchStroageStr()">click here , fetch new stroageStr</button>
    <button class="btn-destroy" @click="destroyMyself">click Here , i will destroy myself</button>
  </div>
</template>

<script>
export default {
  name: "comB",
  props:{
    modelData: String
  },
  data() {
    return {
      stroageStr:''
    };
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
    this.fetchStroageStr();
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
    fetchStroageStr(){
      this.stroageStr = localStorage.getItem('testNo.1');
    }
  }
};
</script>

<style lang="" scoped>
.wrapper{
  border: 2px solid black;
}
.btn-destroy {
  background-color: red;
  color: white;
}
</style>