import { useState, useCallback, useMemo } from 'react'
import isURL from 'validator/lib/isURL'

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
  const [isFormChanged, setFormChanged] = useState(false)

  const handleBlogFormChange = useCallback((key, value) => {
    setFormChanged(true)
    const error = checkValidateValue(key, value)
    setBlogFormData(prevState => {
      const preparedNextState = {
        ...prevState,
        [key]: {
          ...prevState[key],
          value,
          error
        },
      }
      return preparedNextState
    })
  }, [])

  const checkValidateValue = useCallback((key, value) => {
    let error
    switch (key) {
      case "title":
      case "description": {
        const isTextValid = value.trim() !== ""
        error = isTextValid ? undefined : 'Invalid.'
        break
      }
      case "imageUrl": {
        const urlText = value.trim()
        if(urlText){
          error = isURL(urlText)? undefined : "URL is invalid."
        }
        break
      }
      default: {
        error = undefined
      }
    }
    return error
  }, [])

  const isFormValid = useMemo(() => {
    const isFormError = Object.keys(blogFormData).reduce((prev, key) => {
      return prev || !!checkValidateValue(key, blogFormData[key].value)
    }, false)
    return !isFormError && isFormChanged
  }, [blogFormData])

  const preparedPayload = useMemo(
    () => ({
      title: blogFormData.title.value.trim(),
      imageUrl: blogFormData.imageUrl.value.trim(),
      description: blogFormData.description.value.trim(),
    }),
    [blogFormData],
  )

  return {
    blogFormData,
    handleBlogFormChange,
    preparedPayload,
    isFormValid
  }
}

export default useBlogForm
