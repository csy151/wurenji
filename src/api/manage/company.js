import request from '@/utils/request'

// 查询企业管理列表
export function listCompany(query) {
  return request({
    url: '/manage/company/list',
    method: 'get',
    params: query
  })
}

// 查询企业管理详细
export function getCompany(id) {
  return request({
    url: '/manage/company/' + id,
    method: 'get'
  })
}

// 新增企业管理
export function addCompany(data) {
  return request({
    url: '/manage/company',
    method: 'post',
    data: data
  })
}

// 修改企业管理
export function updateCompany(data) {
  return request({
    url: '/manage/company',
    method: 'put',
    data: data
  })
}

// 删除企业管理
export function delCompany(id) {
  return request({
    url: '/manage/company/' + id,
    method: 'delete'
  })
}
