<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem.vue",
    data(){
      return {
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}//注意计算属性不要加(),不然生效不了
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        // this.$router.replace(this.route) //这里不能写死，而且我这是错的
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;/*均等分*/
    display:inline;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /*.active{*/
  /*  color:red;*/
  /*}*/
</style>