<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null,
      }
    },
    mounted() {
      //不要通过query去拿，class重复之类的，可能出现问题
      // this.scroll = new BScroll(document.querySelector('wrapper'),{
      this.scroll = new BScroll(this.$refs.wrapper,{//用ref保证一定拿到的是上面指定的ref元素
        probeType:3
      })
      this.scroll.on('scroll',(position)=>{
        console.log(position);
      })
    }

  }
</script>

<style scoped>

</style>