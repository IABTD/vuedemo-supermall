<template>
<!--  <div class="back-top" @click="backClick">-->
  <div class="back-top">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    // methods:{ //直接外层 指定点击组件的调用方法，省得不同组件之间方法调用复杂。
    //   backClick(){
    //     console.log('回到顶部');
    //   }
    // }
  }
</script>

<style scoped>
  .back-top{
    position:fixed;
    right: 10px;
    bottom:55px;
  }

  .back-top img{
    width: 43px;
    height: 43px;
  }
</style>