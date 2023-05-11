import React from 'react'
import JoinBtn from '../../../../Header/JoinBtn'
import SignBtn from '../../../../Header/SignBtn'
import {AiOutlineClose} from 'react-icons/ai'

function ContinueHandle({setShow}) {
  return (
    <div className='continue-click'>
      <div onClick={()=>{setShow(false)}} className='close-continue'><AiOutlineClose size={20}/></div>
        <p>To place an order, you'll need to be a Starbucks® Rewards member</p>
        <JoinBtn>
            Join
        </JoinBtn>
        <SignBtn/>
    </div>
  )
}

export default ContinueHandle