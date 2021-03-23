import { useState, useCallback, useMemo } from 'react'

const initialBlogFormState = {
  title: {
    value: '',
    error: undefined,
  },
  imageUrl: {
    value: '',
    error: undefined,
  },
  description: {
    value: '',
    error: undefined,
  },
}

const useBlogForm = () => {
  const [blogFormData, setBlogFormData] = useState(initialBlogFormState)

  const handleBlogFormChange = useCallback((key, value) => {
    setBlogFormData(prevState => {
      const preparedNextState = {
        ...prevState,
        [key]: {
          ...prevState[key],
          value,
        },
      }
      return preparedNextState
    })
  }, [])

  const preparedPayload = useMemo(
    () => ({
      title: blogFormData.title.value,
      imageUrl: blogFormData.imageUrl.value,
      description: blogFormData.description.value,
    }),
    [blogFormData],
  )

  return {
    blogFormData,
    handleBlogFormChange,
    preparedPayload,
  }
}

export default useBlogForm
