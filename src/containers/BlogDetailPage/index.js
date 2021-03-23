import { useEffect, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";

import TextInput from '../../components/TextInput/loadable'
import Button from '../../components/Button/loadable'
import Loading from '../../components/Loading/loadable'

import { createBlog } from '../../store/thunk-actions/blog'

import useBlogForm from '../../hooks/useBlogForm'

import { FETCH_STATUS_SUCCESS } from '../../utils'

import BlogDetailPageStyled from './styled'

const BlogDetailPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const createBlogFetchStatus = useSelector(state => state.blog.createBlog.fetchStatus)

  const { blogFormData, handleBlogFormChange, preparedPayload, isFormValid } = useBlogForm()

  useEffect(() => {
    if(createBlogFetchStatus === FETCH_STATUS_SUCCESS){
      history.push("/home")
    }
  }, [createBlogFetchStatus, history])

  const handleCreateBlog = useCallback(() => {
    dispatch(createBlog(preparedPayload))
  }, [preparedPayload])

  const handleCancelClick = useCallback(() => {
    history.push("/home")
  }, [history])

  const handleTitleChange = useCallback(newValue => {
    handleBlogFormChange("title", newValue)
  }, [handleBlogFormChange])

  const handleImageUrlChange = useCallback(newValue => {
    handleBlogFormChange("imageUrl", newValue)
  }, [handleBlogFormChange])

  const handleDescriptionChange = useCallback(newValue => {
    handleBlogFormChange("description", newValue)
  }, [handleBlogFormChange])

  const pageTitle = useMemo(() => {
    return (
      <div className="page-title-container">
        Create Blog
      </div>
    )
  }, [])

  return (
    <BlogDetailPageStyled>
      {pageTitle}
      <div className="form-row-container">
        <TextInput
          id="title-input"
          className="input-container"
          type="text"
          label="Title"
          value={blogFormData.title.value}
          onChange={handleTitleChange}
          errorText={blogFormData.title.error}
        />
        <TextInput
          id="image-input"
          className="input-container image-input"
          type="text"
          label="Image URL"
          value={blogFormData.imageUrl.value}
          onChange={handleImageUrlChange}
          errorText={blogFormData.imageUrl.error}
        />
      </div>
      <div className="form-row-container">
        <TextInput
          id="description-input"
          className="input-container"
          type="textarea"
          label="Description"
          value={blogFormData.description.value}
          onChange={handleDescriptionChange}
          errorText={blogFormData.description.error}
        />
      </div>
      <div className="form-row-container">
        <Button
          className="btn"
          text="Create"
          onClick={handleCreateBlog}
          disabled={!isFormValid}
        />
        <Button
          className="btn"
          text="Cancel"
          onClick={handleCancelClick}
          invert
        />
      </div>
    </BlogDetailPageStyled>
  )
}

export default BlogDetailPage
