import React from 'react'
import './RewardsComing.css'

import JoinBtn from '../../../Header/JoinBtn'
import { Link } from 'react-router-dom'

function RewardsComing({comeBtn}) {
  return (
    <div className='reward-coming'>

      <div className='coming-container'>
       
        <img className='coming-stars-left' src="https://www.starbucks.com/app-assets/7997fb008f368630d3ca3c1194fd8404.svg" alt="" />
        <img className='star-res-l' src="https://www.starbucks.com/app-assets/c87d1677e476d2d20e5f114e5068d2cd.svg" alt="" />
        
        <div className='coming-content'>
          <h3>Keep the Rewards Coming</h3>
          <p>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
          <img className='coming-delta' src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png" alt="" />
          
          <p><Link>Link your Delta</Link>  SkyMiles® and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.</p>
          <JoinBtn comeBtn={"comeBtn"} colorGreen={"colorGreen"}>Join Starbucks<sup className='superscript'>®</sup> Reward</JoinBtn>
        </div>
        
        <img className='coming-stars-right' src="https://www.starbucks.com/app-assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg" alt="" />
        <img className='star-res-r' src="https://www.starbucks.com/app-assets/c7d010ad5c5f6c00d5446d2f8c652c42.svg" alt="" />
        
      </div>

    </div>
  )
}

export default RewardsComing