<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <!--  <h2>首页</h2>-->
  <div id="home"><!--首页是唯一的，所以给个id-->
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'

  import {getHomeMutltidata} from "network/home";
  //如果该组件没有一个index or 封装好的Vue组件，就需要分别导入
  // import Swiper from 'components/common/swiper/Swiper';
  // import SwiperItem from 'components/common/swiper/SwiperItem'
  //会自动去该目录下寻找index.js，所以可以省略/index
  //这里直接把组件引用再另外抽离出来了。
  // import {Swiper, SwiperItem} from 'components/common/swiper'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMutltidata().then(res => {
        console.log(res);
        this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>