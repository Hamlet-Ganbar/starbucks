import React from 'react'
import { Helmet } from 'react-helmet'
import SignBtn from '../../../Header/SignBtn'
import JoinBtn from '../../../Header/JoinBtn'
import MenuSticky from '../MenuSticky'


function Favorites() {
  return (
    <>

      <Helmet>
        <title>
          Favorite Products
        </title>
      </Helmet>
      <div>
        <div className='previous containerr'>
          <h3 className='previous-header'>Favorite Products</h3>
          <div className="previous-gif">
            <img className='favorite-photo' src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="favorite_product" />
          </div>
          <h5 className='previous-title'>Save your favorite mixes</h5>
          <p className='previous-paragraph'>Use the heart to save customizations. Your favorites will appear here to order again.</p>
          <div className='dflex previous-btn'><SignBtn /> <JoinBtn>Join now</JoinBtn></div>
        </div>
      </div>
      <MenuSticky/>
    </>
  )
}

export default Favorites