import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../../Context/Context'
import {BsChevronLeft} from 'react-icons/bs'

function MenuNavResponsive() {
    const {menuOpen}=useContext(MainContext)
    const {setMenuOpen}=useContext(MainContext)
    const {closeBar}=useContext(MainContext)

    const menuOpenHandler=()=>{
        setMenuOpen(!menuOpen)
    }

    return (
       
        <ul className={menuOpen? "menu-nav-res res-close": "menu-nav-res res-open"}>
            <div className='nav-res-title' onClick={menuOpenHandler}><span onClick={menuOpenHandler}><BsChevronLeft/></span><h4>Menu</h4></div>
            <li onClick={closeBar}><NavLink to="/menu">All products</NavLink></li>
            <li onClick={closeBar}><NavLink to='/menu/featured'>Featured</NavLink></li>
            <li onClick={closeBar}><NavLink to="/menu/previous">Previous Orders</NavLink></li>
            <li onClick={closeBar}><NavLink to="/menu/favorites">Favorite Products</NavLink></li>
        </ul>
    )
}

export default MenuNavResponsive