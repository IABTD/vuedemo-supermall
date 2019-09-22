module.exports = {
  configureWebpack: { //表示要写一些webpack的配置
    resolve:{ //resolve解决一些 路径的问题
      // extensions:[],//配置一些可以省略不写的后缀名.一般不需要自己配了
      alias:{//之前CLI2是不能通过‘@/xxx’配置的，虽然alias都会默认配置 'src':'@'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // 'router':'@/router',//一般没必要，也就main.js会引用一下而已
        // 'store':'@/store',//这个也一般不需要，因为项目中都可以通过this.$router,this.$store获取，只要main.js有就好了
      }
    }
  }
}