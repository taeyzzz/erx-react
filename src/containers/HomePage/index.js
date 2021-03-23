import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import { getListBlog } from '../../store/thunk-actions/blog'

import BlogItem from '../../components/BlogItem/loadable'

import HomePageStyled from './styled'

const HomePage = () => {
  const dispatch = useDispatch()
  const listBlog = useSelector(state => state.blog.listBlog)

  useEffect(() => {
    dispatch(getListBlog())
  }, [])

  const pageTitle = useMemo(() => {
    return (
      <div className="page-title-container">
        Blog list
      </div>
    )
  }, [])

  const generatedListBlogs = useMemo(() => {
    const blogs = listBlog.map(blogData => {
      return (
        <BlogItem
          key={blogData.id}
          image={blogData.imageUrl}
          createdDate={dayjs(blogData.created).format("MMM,DD YYYY")}
          title={blogData.title}
          description={blogData.description}
        />
      )
    })
    return (
      <div className="list-blog-container">
        {blogs}
      </div>
    )
  }, [listBlog])

  return (
    <HomePageStyled>
      {pageTitle}
      {generatedListBlogs}
    </HomePageStyled>
  )
}

export default HomePage
