import React from 'react'
import SignBtn from '../../../Header/SignBtn'
import JoinBtn from '../../../Header/JoinBtn'
import './PreviousOrder.css'
import { Helmet } from 'react-helmet'
import MenuSticky from '../MenuSticky'

function PreviousOrder() {
  return (
    <>
     <Helmet>
        <title>
          Previous Order
        </title>
      </Helmet>
    <div className='previous containerr'>
        <h3 className='previous-header'>Previous Order</h3>
        <div className="previous-gif">
            <img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="previous_gif" />
        </div>
        <h5 className='previous-title'>When history repeats itself</h5>
        <p className='previous-paragraph'>Previous orders will appear here to quickly order again.</p>
        <div className='dflex previous-btn'><SignBtn/> <JoinBtn>Join now</JoinBtn></div>
    </div>
    <MenuSticky/>
    </>
  )
}

export default PreviousOrder