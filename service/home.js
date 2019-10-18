import request from './network.js'

// 封装的获取数据的方法  
export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
} 


// 请求 选项卡数据   传入   type  及 page
export function getProduct(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}