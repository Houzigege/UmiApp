
import request from '@/util/request';


export const a = (data: any) => {
  return request({
    url: '/api/a',
    method: 'get',
    data: data
  })
};

export const sendMessage = (data: any) => {
  return request({
    url: '/api/b',
    method: 'post',
    data: data
  })
};

export const getMessage = (data: any) => {
  return request({
    url: '/api/c',
    method: 'get',
    params: data
  })
};

export const getComponent = (data: any) => {
  return request({
    url: '/api/component',
    method: 'get',
    params: data
  })
};
