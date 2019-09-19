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

  export default {
    name: "Home",
    components: {
      NavBar,
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>