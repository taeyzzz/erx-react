import { memo, useCallback, useMemo } from 'react'
import { useHistory, useLocation } from "react-router-dom";

import HeaderMenu from '../HeaderMenu/loadable'

import HeaderStyled from './styled'

const listHeaderBtn = [
  { path: "/home", text: "Blogs" },
  { path: "/home/create", text: "Create Blog" },
]

const Header = () => {
  const history = useHistory()
  const location = useLocation()

  const handleRedirect = useCallback((path) => {
    history.push(path)
  }, [history])

  const menus = useMemo(() => {
    const generatedMenus = listHeaderBtn.map(menuData => {
      const isSelected = location.pathname === menuData.path
      return (
        <HeaderMenu
          key={menuData.path}
          text={menuData.text}
          path={menuData.path}
          onClick={handleRedirect}
          isSelected={isSelected}
        />
      )
    })
    return generatedMenus
  }, [location])

  return (
    <HeaderStyled>
      {menus}
    </HeaderStyled>
  )
}

export default memo(Header)
