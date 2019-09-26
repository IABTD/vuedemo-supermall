<template xmlns:a="http://www.w3.org/1999/html">
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    // methods:{
    //   imageLoad(){
    //     console.log("load...................")
    //     if(!this.isLoad){
    //       this.isLoad = true;
    //       this.$emit('recommendIsLoaded')
    //     }
    //   }
    // },
    // mounted() {
    //   console.log('RecommendView loading....')
    // }
  }
</script>

<style scoped>
  .recommend{
    display:flex; /*盒子布局*/
    text-align: center; /*里面内容剧中*/
    font-size: 12px;
    padding: 10px 0 20px;/*上下留白， 4个参数分别上右下左*/
    border-bottom: 10px solid #eee;/* 下面留一个浅色横条，画面过渡比较自然 */
  }

  .recommend-item{
    flex: 1; /*内部组件均等分布局（只有里面内容width总和小于父类才生效）*/
  }

  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>