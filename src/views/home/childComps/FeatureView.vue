<template>
  <div class="feature">
    <a href="http://www.baidu.com">
      <img src="../../../assets/img/home/recommend_bg.jpg" alt="" @load="FeatureIsLoaded">
<!--      <img src="~assets/img/home/recommend_bg" alt="">  &lt;!&ndash;莫名就这里用不了别名，不知道为啥&ndash;&gt;-->
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    methods:{
      FeatureIsLoaded(){
        this.$emit('FeatureIsLoaded')
      }
    }
  }
</script>

<style scoped>
  .feature img{
    width: 100%;
  }
</style>