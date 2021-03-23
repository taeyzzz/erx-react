import React, { useCallback, useMemo, memo } from 'react'

import ButtonStyled from './styled'

const Button = ({ id, className, text, onClick, data, disabled, invert }) => {
  const preparedClassName = useMemo(() => {
    let classNameButton = className
    classNameButton += invert ? ' invert' : ''
    return classNameButton
  }, [className, invert])

  const handleClicked = useCallback(() => {
    onClick(data)
  }, [onClick, data])

  return (
    <ButtonStyled id={id} data-testid={id} className={preparedClassName} onClick={handleClicked} disabled={disabled}>
      {text}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  id: 'button-component',
  className: '',
  text: '',
  data: undefined,
  disabled: false,
  invert: false,
}


export default memo(Button)
