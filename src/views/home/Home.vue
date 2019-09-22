<template>
  <!--  <h2>首页</h2>-->
  <div id="home"><!--首页是唯一的，所以给个id-->
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMutltidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
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