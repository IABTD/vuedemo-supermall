import {request} from './request'

export function getHomeMutltidata(){
  return request({
    url:'/home/multidata'
  })
}