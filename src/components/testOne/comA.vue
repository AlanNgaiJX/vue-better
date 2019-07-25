<template>
  <div class="wrapper">
      <h1>now is comA</h1>
      <button class="btnto" @click="toRoute('/b')">toB ></button>
  </div>
</template>

<script>
export default {
  name: 'comA',
  data() { 
    return {

    }
  },
  methods:{
    toRoute(r){
      this.$router.push(r);
    }
  }
 }
</script>

<style lang="" scoped>
.wrapper{
  border: 2px solid black;
}
.btnto{
  background-color: pink;
}
</style>