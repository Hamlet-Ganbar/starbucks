import './StoreProduct.css'
import HeaderLogo from '../../../../Header/HeaderLogo'
import { Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import StoreContent from './StoreContent'
import { Helmet } from 'react-helmet'

function StoreProduct() {
    const adress = localStorage.getItem('store')
    const [show, setShow] = useState(false)
    const [store, setStore] = useState(JSON.parse(localStorage.getItem('productBasket')))
   
    const width = window.innerWidth
    return (
        <>
            <Helmet>
                <title>
                    Review Order: Starbucks Cofee Company
                </title>
            </Helmet>
            <div className='store-product'>
                <div className='store-menu'>
                    <div className='store-header'>
                        {width > 1024 ? <><HeaderLogo />
                            <Link to='/menu'> <span><BsChevronLeft /></span><span>Back to menu</span></Link></> :
                            <Link to='/menu'> <span><BsChevronLeft /></span></Link>}
                    </div>
                    <div className='store-info'>
                        <h4>Review Order ({store.length})</h4>
                        <p>Prep time: 4-9 min</p>
                        <div>
                            <span>Pickup store</span>
                            <div className='store-name'>
                                <Link to='/store-locator'><span>{adress}</span></Link>
                                <Link to='/store-locator'><span><BsChevronDown /></span></Link>
                            </div>
                            <div className='store-method'>
                                <span>Pickup method</span>
                                <span className='store-svg'>
                                    <svg aria-hidden="true" className="valign-middle block mx-auto mb1" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M22.584 1c.273 0 .5.2.543.46l.007.09v20.9c0 .273-.2.5-.46.543l-.09.007H5.564a.55.55 0 01-.09-1.093l.09-.007h7.8V2.1h-7.65v2.7c0 .273-.2.5-.461.543l-.09.007a.55.55 0 01-.542-.46l-.008-.09V1.55c0-.273.2-.5.461-.543L5.164 1h17.42zM5 12.95c1.396 0 2.576 1.785 3.22 4.066l.066.247.099.412c.107.497.165.952.165 1.325 0 2.39-7.1 2.39-7.1 0 0-.31.04-.679.117-1.087l.051-.25.099-.411C2.34 14.865 3.554 12.95 5 12.95zm0 1.1c-.7 0-1.638 1.436-2.154 3.241l-.062.228-.094.39c-.092.425-.14.805-.14 1.091 0 .306 1.05.693 2.45.693 1.4 0 2.45-.387 2.45-.693 0-.229-.03-.518-.09-.836l-.048-.244-.093-.39c-.502-1.922-1.49-3.48-2.219-3.48zM22.033 2.1l-7.57-.001v19.8l7.57.001V2.1zM11.7 7.374c.273 0 .5.2.542.46l.008.09v8a.55.55 0 01-1.093.089l-.007-.09v-8a.55.55 0 01.55-.55zm4.5 0c.273 0 .5.2.542.46l.008.09v8a.55.55 0 01-1.093.089l-.007-.09v-8a.55.55 0 01.55-.55zm-11.221.1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path></svg>
                                </span>
                                <span>In store</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='widthh'>
                    <StoreContent store={store} setStore={setStore} show={show} setShow={setShow} />
                </div>
            </div>
        </>
    )
}

export default StoreProduct

