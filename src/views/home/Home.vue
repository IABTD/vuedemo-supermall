<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <!--  <h2>首页</h2>-->
  <div id="home" class="wrapper"><!--首页是唯一的，所以给个id-->
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
      <ul>
        <li>首页列表1</li>
        <li>首页列表2</li>
        <li>首页列表3</li>
        <li>首页列表4</li>
        <li>首页列表5</li>
        <li>首页列表6</li>
        <li>首页列表7</li>
        <li>首页列表8</li>
        <li>首页列表9</li>
        <li>首页列表10</li>
        <li>首页列表11</li>
        <li>首页列表12</li>
        <li>首页列表13</li>
        <li>首页列表14</li>
        <li>首页列表15</li>
        <li>首页列表16</li>
        <li>首页列表17</li>
        <li>首页列表18</li>
        <li>首页列表19</li>
        <li>首页列表20</li>
        <li>首页列表21</li>
        <li>首页列表22</li>
        <li>首页列表23</li>
        <li>首页列表24</li>
        <li>首页列表25</li>
        <li>首页列表26</li>
        <li>首页列表27</li>
        <li>首页列表28</li>
        <li>首页列表29</li>
        <li>首页列表30</li>
        <li>首页列表31</li>
        <li>首页列表32</li>
        <li>首页列表33</li>
        <li>首页列表34</li>
        <li>首页列表35</li>
        <li>首页列表36</li>
        <li>首页列表37</li>
        <li>首页列表38</li>
        <li>首页列表39</li>
        <li>首页列表40</li>
        <li>首页列表41</li>
        <li>首页列表42</li>
        <li>首页列表43</li>
        <li>首页列表44</li>
        <li>首页列表45</li>
        <li>首页列表46</li>
        <li>首页列表47</li>
        <li>首页列表48</li>
        <li>首页列表49</li>
        <li>首页列表50</li>
        <li>首页列表51</li>
        <li>首页列表52</li>
        <li>首页列表53</li>
        <li>首页列表54</li>
        <li>首页列表55</li>
        <li>首页列表56</li>
        <li>首页列表57</li>
        <li>首页列表58</li>
        <li>首页列表59</li>
        <li>首页列表60</li>
        <li>首页列表61</li>
        <li>首页列表62</li>
        <li>首页列表63</li>
        <li>首页列表64</li>
        <li>首页列表65</li>
        <li>首页列表66</li>
        <li>首页列表67</li>
        <li>首页列表68</li>
        <li>首页列表69</li>
        <li>首页列表70</li>
        <li>首页列表71</li>
        <li>首页列表72</li>
        <li>首页列表73</li>
        <li>首页列表74</li>
        <li>首页列表75</li>
        <li>首页列表76</li>
        <li>首页列表77</li>
        <li>首页列表78</li>
        <li>首页列表79</li>
        <li>首页列表80</li>
        <li>首页列表81</li>
        <li>首页列表82</li>
        <li>首页列表83</li>
        <li>首页列表84</li>
        <li>首页列表85</li>
        <li>首页列表86</li>
        <li>首页列表87</li>
        <li>首页列表88</li>
        <li>首页列表89</li>
        <li>首页列表90</li>
        <li>首页列表91</li>
        <li>首页列表92</li>
        <li>首页列表93</li>
        <li>首页列表94</li>
        <li>首页列表95</li>
        <li>首页列表96</li>
        <li>首页列表97</li>
        <li>首页列表98</li>
        <li>首页列表99</li>
        <li>首页列表100</li>
      </ul>
    </scroll>
<!--    <back-top @click="backClick"></back-top>--> <!--这个监听不到click，只有原生元素可以用click，除非指定.native修饰符-->
    <back-top @click.native="backClick"></back-top>

    <!--<div class="wrapper">
      <div class="content">
      </div>
    </div>-->
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMutltidata, getHomeGoods,} from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType:'pop',
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMutltidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       *  事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
          default:
            break;
        }
      },

      backClick(){
        // console.log('回到顶部')
        this.$refs.scroll.scrollTo(0,0)
      },

      /**
       * 网络请求相关的方法
       */
      getHomeMutltidata() {
        getHomeMutltidata().then(res => {
          console.log(res);
          this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>

  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position:absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top:44px;*/
  /*}*/
</style>