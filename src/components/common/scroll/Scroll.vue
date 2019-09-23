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
      this.scroll = new BScroll(this.$refs.wrapper,{//用ref保证一定拿到的是上面指定的ref元素
        // probeType:3
      })
    },
    methods:{
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      }
    }

  }
</script>

<style scoped>

</style>