import { get, post } from '../../../utils'

import {
  getListBlogRequest,
  getListBlogSuccess,
  getListBlogFailure,
  getListBlogIdle
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
