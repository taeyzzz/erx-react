import { memo, useMemo } from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import BlogItemStyled from './styled'

const BlogItem = ({ id, image, createdDate, title, description }) => {
  const imageContainer = useMemo(() => {
    const imgSrc = image || "https://dummyimage.com/350x200/707070/575057.png"
    return (
      <div className="image-container">
        <img src={imgSrc} />
      </div>
    )
  }, [image])

  const createdDateContainer = useMemo(() => {
    return (
      <div className="date-container">
        {createdDate}
      </div>
    )
  }, [createdDate])

  const titleContainer = useMemo(() => {
    return (
      <div className="title-container elilipsis">
        {title}
      </div>
    )
  }, [title])

  const descriptionContainer = useMemo(() => {
    return (
      <ReactMarkdown className="description-result-container elilipsis" allowDangerousHtml>
        {description}
      </ReactMarkdown>
    )
  }, [description])

  return (
    <BlogItemStyled>
      {imageContainer}
      {createdDateContainer}
      {titleContainer}
      {descriptionContainer}
    </BlogItemStyled>
  )
}

export default memo(BlogItem)
