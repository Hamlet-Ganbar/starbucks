import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './Menu.css'
import MenuNav from './MenuNav'

const Menu = () => {

  const location = useLocation()

  return (
    <div className= 'menu-page'>
      <div className= {location.pathname=== "/menu/featured"? " menu-nav-close": ' menu-nav-close menu'}>

        {location.pathname!== "/menu/featured" && <MenuNav/>}

      </div>
      
      <Outlet />
    </div>

  )
}

export default Menu