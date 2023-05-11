import React, { useContext } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MainContext } from '../../Context/Context'

function MenuSticky() {
    const { selectStore } = useContext(MainContext)
    const { setSelectStore } = useContext(MainContext)
    const closeHandle = () => {
        setSelectStore("")
    }

    let basket = JSON.parse(localStorage.getItem('productBasket'))

    return (
        <div className='menu-sticky'>
            <div>

                <div className="go-store">
                    <div className='sticky-content'>
                        <div>
                            <p><Link to='/store-locator'>{selectStore ? "Pickup store" : "For item availability"}</Link></p>
                            <span><Link to='/store-locator'>{selectStore ? `${selectStore}` : "Choose a store"}</Link></span>
                        </div>
                        <div className='sticky-res'>
                            {selectStore ? `${selectStore}` : "For item availability, choose a store"}
                            {selectStore ? <AiFillCloseCircle onClick={closeHandle} /> :
                                <Link to='/store-locator'><BiChevronDown size={20} /></Link>}
                        </div>
                    </div>
                    <div className='sticky-icon'>{selectStore ? <AiFillCloseCircle onClick={closeHandle} /> :
                        <Link to='/store-locator'><BiChevronDown /></Link>}
                    </div>
                </div>

                <Link to={basket.length? '/menu/cart': '/store-locator'} className='menu-bag'><div>
                    {basket.length ? <BsFillBagFill  className='basket-full'/>: <BsBag/>}
                    <div className='bask'>{basket.length ? basket.length : "" }</div>
                </div>
                </Link>
            </div>


        </div>
    )
}

export default MenuSticky