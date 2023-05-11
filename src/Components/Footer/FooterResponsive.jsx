import React, { useContext, useState } from 'react'
import './FooterResponsive.css'
import { nanoid } from 'nanoid'
import { MainContext } from '../Context/Context'

function FooterResponsive() {
const {footerData} = useContext(MainContext)
    return (
        <div className='containerr footer-mobile'>
            {footerData.map(item => {
                return (<FooterMenu key={nanoid()} {...item} />
                )
            })}
        </div>
    )
}

export default FooterResponsive



function FooterMenu({ title, li }) {
    const [drop, setDrop] = useState(false)

    const openMenu = () => {
        setDrop(!drop)
    }
    return (
        <div className='f-res'>
            <div className='f-res-rel' onClick={openMenu}>
                <h3>{title}</h3>
                <div className={drop ? 'drop-open drop-menu' : "drop-close drop-menu"}>
                    <FooterResponsiveItem key={nanoid()} drop={drop} li={li} />
                </div>
            </div>
            <div onClick={openMenu} className={drop ? 'drop-chevron chevron-open' : "drop-chevron chevron-close"}>^</div>
        </div>
    )
}


function FooterResponsiveItem({ li, drop }) {
    return (
        <div >
            {li.map(item => {
                return (
                    <div key={nanoid()} className='drop-menu-item'>{item}</div>
                )
            })}
        </div>
    )
}