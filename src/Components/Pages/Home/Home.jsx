import React, { useContext } from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { ProductsContext } from '../../Context/ProductsContext'
import Loading from '../../Loading'

function Home() {
  const datas = [
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83498.jpg",
      title: " Spring in your step, Rewards in your cup",
      description: 'Shake up your usual and start earning Rewards —join today!*',
      btn: 'Join now',
      color: "#d4e9e2",
      cardImg: "strb-img",
      cardTitle: "strb"
    },
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83500.jpg",
      title: " For their Easter basket",
      description: 'Surprise some bunny you love this holiday with an egg-cellent Starbucks Card.',
      btn: 'Send an eGift',
      color: "#f6bfd9",
      classs: ""
    },
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83265.jpg",
      title: " Brighten your day",
      description: 'Enjoy a cheery Pink Drink, Paradise Drink or Dragon Drink® Starbucks Refreshers® beverage.',
      btn: 'Order now',
      color: "#a0c292",
      classs: ""
    },
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83504.png",
      title: "Oh, so vibrant",
      description: 'The Impossible™ Breakfast Sandwich, featuring an Impossible™ Sausage Patty Made From Plants, is always a great choice.**',
      btn: 'Order now',
      color: "#d4e9e2",
      classs: ""
    },

  ]
  const { loading } = useContext(ProductsContext)

  return (
    <>
      {loading ? <Loading /> :
        <div className='home-page'>
          <div className='containerr home'>

            {datas.map(item => {
              return <HomeItem key={nanoid()} {...item} />
            })}


            <p className='home-footer'>*At participating stores. Some restrictions apply. See <NavLink to='/rewards'>starbucks.com/rewards</NavLink></p>
            <p className='home-footer'>**Impossible is a trademark of Impossible Foods Inc. Used under license.</p>
          </div>
        </div>
      }

    </>


  )
}

export default Home

function HomeItem({ img, title, description, btn, color, cardImg, cardTitle }) {

  return (

    <div style={{ backgroundColor: `${color}` }} className='home-cards'>
      <div className={cardImg}><img src={img} alt="" /></div>
      <div className={`cards-title ${cardTitle}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{btn}</button>
      </div>
    </div>
  )
}