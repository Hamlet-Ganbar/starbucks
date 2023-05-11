import React, { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function MenuNav() {
    const location = useLocation()
    const prodRef = useRef()

    useEffect(() => {
        if (location.pathname !== "/menu") {
            prodRef.current.classList.remove("active")
        }
        else {
            prodRef.current.classList.add("active")
        }
    }, [location])

    
    return (
        <>
            <nav className='containerr'>
                <ul className='menu-nav'>
                    <li><NavLink to="/menu" ref={prodRef}>All products</NavLink></li>
                    <li><NavLink to='featured'>Featured</NavLink></li>
                    <li><NavLink to="previous">Previous Orders</NavLink></li>
                    <li><NavLink to="favorites">Favorite Products</NavLink></li>
                </ul>

            </nav>
        </>


    )
}

export default MenuNav

