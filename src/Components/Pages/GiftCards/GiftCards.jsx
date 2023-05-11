import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import './GiftCards.css'
import GotGiftCard from './GotGiftCard/GotGiftCard'
import GiftCard from './GiftCard/GiftCard'
import GiftSection from './GiftCard/GiftSection'
import GiftCardSupport from './GiftCardSupport/GiftCardSupport'
import CardSupport from './CardSupport/CardSupport'
import { ProductsContext } from '../../Context/ProductsContext'
import Loading from '../../Loading'


function GiftCards() {
  const { loading } = useContext(ProductsContext)

  return (
    <div className='gift-cards'>
      <Helmet>
        <title>
          Gift cards
        </title>
      </Helmet>
      {loading ? <Loading /> : <div>
        <GiftCard />
        <GotGiftCard />
        <GiftSection />
        <GiftCardSupport />
        <CardSupport />
      </div>}



    </div>
  )
}

export default GiftCards