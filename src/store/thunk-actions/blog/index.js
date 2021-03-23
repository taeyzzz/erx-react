import { get, post } from '../../../utils'

import {
  getListBlogRequest,
  getListBlogSuccess,
  getListBlogFailure,
  getListBlogIdle,
  createBlogRequest,
  createBlogSuccess,
  createBlogFailure,
  createBlogIdle
} from '../../slices/blog'

export const getListBlog = () => async dispatch => {
  dispatch(getListBlogRequest())
  try {
    const response = await get({
      url: "/blog"
    })
    dispatch(getListBlogSuccess(response))
  }
  catch (error) {
    dispatch(getListBlogFailure(error))
  }
  finally {
    dispatch(getListBlogIdle())
  }
}

export const createBlog = (data) => async dispatch => {
  dispatch(createBlogRequest())
  try {
    const response = await post({
      url: "/blog",
      payload: data
    })
    console.log(response);
    dispatch(createBlogSuccess(response))
  }
  catch (error) {
    dispatch(createBlogFailure(error))
  }
  finally {
    dispatch(createBlogIdle())
  }
}
