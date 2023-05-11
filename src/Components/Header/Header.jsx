import React, { useContext } from 'react'
import "../Header/Header.css"
import HeaderLogo from './HeaderLogo'
import HeaderNavLeft from './HeaderNavLeft'
import HeaderNavRight from './HeaderNavRight'
import { useLocation } from 'react-router-dom'
import LineHeigt from './LineHeigt'
import { MainContext } from '../Context/Context'
import MenuNavResponsive from '../Pages/Menu/MenuNavResponsive'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'


function Header() {
  const { hambur } = useContext(MainContext)
  const { setHambur } = useContext(MainContext)
  const { setMenuOpen } = useContext(MainContext)

  const location = useLocation()


  const hamburgerMenu = () => {
    setHambur(!hambur)
    setMenuOpen(false)
  }

  hambur ? disableBodyScroll(document) : enableBodyScroll(document)
  return (
    <>
    <header>
      <nav className='header containerr'>
        <HeaderLogo />
        <div className={hambur ? "nav nav-close" : 'nav nav-open'}>
          <div className='nav-left'>
            {location.pathname !== "/account/signin" && location.pathname !== "/account/create" && <HeaderNavLeft />}
          </div>

          <div>
            {(location.pathname !== "/account/signin" && location.pathname !== "/account/create") && <HeaderNavRight />}
            {location.pathname === '/account/signin' && <LineHeigt />}
            {location.pathname === '/account/create' && <LineHeigt />}
          </div>
        </div>
        {(location.pathname !== "/account/signin" && location.pathname !== "/account/create") && <div onClick={hamburgerMenu} className='hamburger'>{hambur ? "🗙" : "☰"}</div>}
        <MenuNavResponsive />
      </nav>
    </header>
    </>
    
  )
}

export default Header

