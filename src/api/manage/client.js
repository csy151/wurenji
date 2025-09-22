import request from '@/utils/request'

// 查询客户管理列表
export function listClient(query) {
  return request({
    url: '/manage/client/list',
    method: 'get',
    params: query
  })
}

// 查询客户管理详细
export function getClient(id) {
  return request({
    url: '/manage/client/' + id,
    method: 'get'
  })
}

// 新增客户管理
export function addClient(data) {
  return request({
    url: '/manage/client',
    method: 'post',
    data: data
  })
}

// 修改客户管理
export function updateClient(data) {
  return request({
    url: '/manage/client',
    method: 'put',
    data: data
  })
}

// 删除客户管理
export function delClient(id) {
  return request({
    url: '/manage/client/' + id,
    method: 'delete'
  })
}
