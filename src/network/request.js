import axios from 'axios'

/**
 * 因为本来axios返回的就是Promise，可以直接返回
 * @param config
 * @returns {Promise<any>}
 */
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://localhost:8081/zhidao_maven/',
    baseURL: 'http://123.207.32.32',
    timeout: 5000
  })

  // 2.axiosd的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log(config)
    // 1.比如config中有一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求(比如登录token)，必须携带一些特殊的信息，如果没有token直接跳转登录界面
    return config //不这么做的话config被拦截，下面发请求就获取不到config了，会导致下面网络请求出错
  }, err => {
    console.log(err)
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data //如果只需要data，可以拦截后只获取data
  }, err => {
    console.log(err)
  })

  // 3.发送真正的网络请求
  return instance(config)
}


/**
 * 封装axios组件，这样避免第三方代码不被维护后，其他用到的地方都要大改的尴尬局面
 * @param config 用户指定的url、header等配置属性
 * @param success 响应成功后的回调函数
 * @param failure 响应失败后的回调函数
 */
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://localhost:8081/zhidao_maven/',
//     timeout: 3000
//   })
//
//   // 发送真正的网络请求
//   instance(config)
//       .then(res => {
//         success(res);
//       })
//       .catch(err => {
//         failure(res)
//       })
// }
//
// /**
//  * 也可以把配置都放在config中，统一起来，baseConfig,success,failure
//  * @param config
//  */
// export function request2(config) {
//   const instance = axios.create({
//     baseURL: 'http://localhost:8081/zhidao_maven/',
//     timeout: 3000
//   })
//
//   instance(config.baseConfig)
//       .then(res => {
//         config.success(res);
//       })
//       .catch(err => {
//         config.failure(res)
//       })
// }
//
// /**
//  * 只传入配置，然后由于axios支持Promise，留给调用者写then和catch
//  * @param config
//  */
// export function request3(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://localhost:8081/zhidao_maven/',
//       timeout: 3000
//     })
//     instance(config)
//         .then(res => {
//           resolve(res)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     // return new Promise((resolve,reject)=>{
//     //   return instance(config)
//     // })//错误写法
//   })
// }
