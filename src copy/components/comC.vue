<template>
  <div class="wrapper">
      <h1>now is comC</h1>
      <button class="btnback" @click="back">back</button>
  </div>
</template>

<script>
export default {
  name: 'comC',
  data() { 
    return {

    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'comB') {
      to.meta.isUseCache = true;
    }
    next();
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
 }
</script>

<style lang="" scoped>
.wrapper{
  border: 2px solid black;
}
.btnto{
  background-color: blue;
  color: white;
}
.btnback{
  background-color: green;
  color: white;
}
</style>