import React, { useMemo, memo } from 'react'

import LabelStyled from './styled'

const Label = ({ id, className, disabled, children }) => {
  const preparedClassName = useMemo(() => {
    let labelClassName = className
    labelClassName += disabled ? ' disabled' : ''
    return labelClassName
  }, [className, disabled])

  return (
    <LabelStyled id={id} data-testid={id} className={preparedClassName}>
      {children}
    </LabelStyled>
  )
}

Label.defaultProps = {
  id: 'label-component',
  className: '',
  disabled: false,
  children: null,
}

export default memo(Label)
