import request from '@/utils/request'

// 查询轮播图管理列表
export function listSlideshow(query) {
  return request({
    url: '/manage/slideshow/list',
    method: 'get',
    params: query
  })
}

// 查询轮播图管理详细
export function getSlideshow(id) {
  return request({
    url: '/manage/slideshow/' + id,
    method: 'get'
  })
}

// 新增轮播图管理
export function addSlideshow(data) {
  return request({
    url: '/manage/slideshow',
    method: 'post',
    data: data
  })
}

// 修改轮播图管理
export function updateSlideshow(data) {
  return request({
    url: '/manage/slideshow',
    method: 'put',
    data: data
  })
}

// 删除轮播图管理
export function delSlideshow(id) {
  return request({
    url: '/manage/slideshow/' + id,
    method: 'delete'
  })
}
