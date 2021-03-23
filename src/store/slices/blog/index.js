import { createSlice } from '@reduxjs/toolkit'

import { FETCH_STATUS_IDLE, FETCH_STATUS_REQUEST, FETCH_STATUS_FAILURE, FETCH_STATUS_SUCCESS } from '../../../utils'

const initialState = {
  listBlog: [],
  getListBlog: {
    fetchStatus: FETCH_STATUS_IDLE
  },
  createBlog: {
    fetchStatus: FETCH_STATUS_IDLE
  }
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    getListBlogRequest: (state) => {
      state.getListBlog.fetchStatus = FETCH_STATUS_REQUEST
    },
    getListBlogSuccess: {
      reducer: (state, action) => {
        state.getListBlog.fetchStatus = FETCH_STATUS_SUCCESS
        state.listBlog = action.payload.listBlog
      },
      prepare: (listBlog) => {
        return {
          payload: {
            listBlog
          }
        }
      }
    },
    getListBlogFailure: {
      reducer: (state, action) => {
        state.getListBlog.fetchStatus = FETCH_STATUS_FAILURE
        state.getListBlog.error = action.payload.error
      },
      prepare: (error) => {
        return {
          payload: {
            error
          }
        }
      }
    },
    getListBlogIdle: (state) => {
      state.getListBlog.fetchStatus = FETCH_STATUS_IDLE
    },
    createBlogRequest: (state) => {
      state.createBlog.fetchStatus = FETCH_STATUS_REQUEST
    },
    createBlogSuccess: {
      reducer: (state, action) => {
        state.createBlog.fetchStatus = FETCH_STATUS_SUCCESS
      },
    },
    createBlogFailure: {
      reducer: (state, action) => {
        state.createBlog.fetchStatus = FETCH_STATUS_FAILURE
        state.createBlog.error = action.payload.error
      },
      prepare: (error) => {
        return {
          payload: {
            error
          }
        }
      }
    },
    createBlogIdle: (state) => {
      state.createBlog.fetchStatus = FETCH_STATUS_IDLE
    },
  }
})

export const {
  getListBlogRequest,
  getListBlogSuccess,
  getListBlogFailure,
  getListBlogIdle,
  createBlogRequest,
  createBlogSuccess,
  createBlogFailure,
  createBlogIdle,
} = blogSlice.actions

export default blogSlice.reducer
