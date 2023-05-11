import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../Context/Context';
import {BsChevronRight} from 'react-icons/bs'


function HeaderNavLeft() {
    const {menuOpen}=useContext(MainContext)
    const {setMenuOpen}=useContext(MainContext)
    const {closeBar}=useContext(MainContext)

    const menuOpenHandler=()=>{
        setMenuOpen(!menuOpen)
    }
    return (
        <> 
        
            <li onClick={menuOpenHandler} className='menu-item'><NavLink className="nav-item " to='/menu'>MENU </NavLink> <span  className={!menuOpen? "menu-chevron menu-chevron-open": "menu-chevron menu-chevron-close"}> <BsChevronRight/></span></li>
            <li onClick={closeBar}><NavLink className="nav-item" to='/rewards'>REWARDS </NavLink></li>
            <li onClick={closeBar}><NavLink className="nav-item" to='/gift'>GIFT CARDS </NavLink></li>
        </>
    )
}

export default HeaderNavLeft