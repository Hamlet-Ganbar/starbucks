import React, { useContext } from 'react'
import SignBtn from './SignBtn'
import JoinBtn from './JoinBtn'
import { IoLocation } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../Context/Context'


function HeaderNavRight() {
  const {closeBar}=useContext(MainContext)

    return (
        <div onClick={closeBar} className='dflex between nav-right'>
            <div className='find-nav'>
                <NavLink className='find-nav' to='store-locator'>
                    <div className='findStore'>
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