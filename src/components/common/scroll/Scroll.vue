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
    props:{
      probeType:{
        type:Number,
        default:0,
      }/*,
      pullUpLoad:{
        type:Boolean,
        dafault:false,
      }*/
    },
    data(){
      return{
        scroll:null,
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{//用ref保证一定拿到的是上面指定的ref元素
        click:true,
        probeType:this.probeType
      })

      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      // console.log(this.scroll)

      // this.scroll.scrollerHeight = 100000;

      this.scroll.refresh()//让scroll重新计算srollerHeight高度
      // // 3.监听上拉事件
      // this.scroll.on('pullingUp', () => {
      //   // alert(123456)
      //   this.$emit('pullingUp')
      // })
    },
    methods:{
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    }

  }
</script>

<style scoped>

</style>