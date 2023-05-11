import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import './Rewards.css'
import JoinBtn from '../../Header/JoinBtn'
import RewardsGetStart from './RewardsGetStart/RewardsGetStart'
import RewardsFavorite from './RewardsFavorite/RewardsFavorite'
import RewardsEndless from './RewardsEndless/RewardsEndless'
import RewardsCashCards from './RewardsCashCards/RewardsCashCards'
import RewardsComing from './RewardsComing/RewardsComing'
import RewardsQuestion from './RewardsQuestion/RewardsQuestion'
import RewardsFooter from './RewardsFooter/RewardsFooter'
import { ProductsContext } from '../../Context/ProductsContext'
import Loading from '../../Loading'


const Rewards = () => {
  const { loading } = useContext(ProductsContext)


  return (
    <div className='reward-page'>
      <Helmet>
        <title>
          Rewards
        </title>
      </Helmet>


      {loading ? <Loading /> :
        <>
        <div className='sticky'>
          <div className="containerr">
            <h3>STARBUCKS <sup className='superscript'>®</sup>  REWARDS</h3>
          </div>
        </div>

          <div className='reward'>
            <div className='containerr reward-head'>
              <h3>FREE COFFEE  <br />IS A TAP AWAY</h3>
              <p>Join now to start earning Rewards.</p>
              <JoinBtn colorGreen={"colorGreen"} >
                Join now
              </JoinBtn>
              <p>Or join in the app for the best experience</p>
            </div>
          </div>
          <RewardsGetStart />
          <RewardsFavorite />
          <RewardsEndless />
          <RewardsCashCards />
          <RewardsComing />
          <RewardsQuestion />
          <RewardsFooter /></>
      }

    </div>
  )
}

export default Rewards

