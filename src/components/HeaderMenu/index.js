import { memo, useCallback } from 'react'
import HeaderMenuStyled from './styled'

const HeaderMenu = ({ path, text, onClick, isSelected }) => {
  const handleClick = useCallback(() => {
    onClick(path)
  }, [path, onClick])

  return (
    <HeaderMenuStyled className={isSelected? "selected" : ""} onClick={handleClick}>
      {text}
    </HeaderMenuStyled>
  )
}

export default memo(HeaderMenu)
