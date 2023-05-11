import React from 'react'
import SignBtn from './SignBtn'
import JoinBtn from './JoinBtn'
import { IoLocation } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'


function HeaderNavRight() {
    return (
        <div className='dflex between nav-right'>
            <div className='find-nav'>
                <NavLink className='find-nav' to='store-locator'>
                    <div className='findStore dflex between'>
                        <IoLocation size={20} />
                        <b className='find '>Find a store</b>
                    </div>
                </NavLink>
            </div>
            <div className='dflex'>
                <SignBtn />
                <JoinBtn>Join now</JoinBtn>
            </div>
        </div>
    )
}

export default HeaderNavRight