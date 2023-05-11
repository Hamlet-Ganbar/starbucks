import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderNavResponsive() {
  return (
    <>
    <li><NavLink className="nav-item" to='/menu'>MENU </NavLink></li>
    <li><NavLink className="nav-item" to='/rewards'>REWARDS </NavLink></li>
    <li><NavLink className="nav-item" to='/gift'>GIFT CARDS </NavLink></li>
</>
  )
}

export default HeaderNavResponsive