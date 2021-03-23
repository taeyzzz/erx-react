import React, { useMemo, memo, useCallback } from 'react'
import PropTypes from 'prop-types'

import Label from '../Label/loadable'

import TextInputStyled from './styled'

export const TEXT_AREA = 'textarea'

const TextInput = ({ id, className, type, label, placeholder, onChange, value, disabled, errorText }) => {
  const preparedClassName = useMemo(() => {
    let inputClassName = className
    inputClassName += errorText ? ' error' : ''
    inputClassName += disabled ? ' disabled' : ''
    return inputClassName
  }, [className, errorText, disabled])

  const preparedLabel = useMemo(() => {
    let labelInput = null
    if (label) {
      labelInput = (
        <Label id={`${id}-label`} data-testid={`${id}-label`} className="label-container" disabled={disabled}>
          {label}
        </Label>
      )
    }
    return labelInput
  }, [id, label, disabled])

  const preparedErrorText = useMemo(() => {
    let errorMessage = null
    if (errorText) {
      errorMessage = (
        <div id={`${id}-error-message`} data-testid={`${id}-error-message`} className="error-message-container">
          {errorText}
        </div>
      )
    }
    return errorMessage
  }, [id, errorText])

  const handleInputChange = useCallback(
    e => {
      if (onChange) {
        onChange(e.target.value)
      }
    },
    [onChange],
  )


  const preparedInput = useMemo(
    () => (
      <input
        id={id}
        data-testid={id}
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
      />
    ),
    [id, type, placeholder, value, handleInputChange, disabled],
  )

  const preparedTextArea = useMemo(
    () => (
      <textarea
        id={id}
        data-testid={id}
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
      />
    ),
    [id, placeholder, value, handleInputChange, disabled],
  )

  return (
    <TextInputStyled id={`${id}-wrapper`} data-testid={`${id}-wrapper`} className={preparedClassName}>
      {preparedLabel}
      {type === TEXT_AREA ? preparedTextArea : preparedInput}
      {preparedErrorText}
    </TextInputStyled>
  )
}

TextInput.defaultProps = {
  id: 'input-component',
  type: 'text',
  className: '',
  placeholder: '',
  label: '',
  value: '',
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  errorText: undefined,
  onEnter: undefined,
}

export default memo(TextInput)
