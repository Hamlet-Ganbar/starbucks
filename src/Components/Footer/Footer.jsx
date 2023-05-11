import React, { useContext } from 'react'
import './Footer.css'
import FooterLinks from './FooterLinks'
import { nanoid } from 'nanoid'
import FooterResponsive from './FooterResponsive'
import { MainContext } from '../Context/Context'
import FooterEnd from './FooterEnd'


function Footer() {
  const width = window.innerWidth

  return (
    <footer>

      {width>=1000? <FooterDisplay/> :  <FooterResponsive/> }
      
      <div className="containerr">
        <FooterLinks />
        <FooterEnd/>
      </div>
    </footer>
  )
}

export default Footer

function FooterDisplay() {
  const {footerData}=useContext(MainContext)

  return (
    <div className='containerr dflex footer'>

      {footerData.map(item => {
        return (
          <FooterItem key={nanoid()} {...item} />
        )
      })}
    </div>
  )
}

function FooterItem({ title, li }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {li.map(item => {
          return <li key={nanoid()}>{item}</li>
        })}
      </ul>
    </div>


  )
}

