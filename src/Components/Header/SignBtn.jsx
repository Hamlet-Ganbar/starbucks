import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/Context'

function SignBtn() {
  const {closeBar}=useContext(MainContext)
  return (
    <div>
      <Link to="/account/signin" ><div><button onClick={closeBar} className='signBtn'>Sign in</button></div></Link>
    </div>
  )
}

export default SignBtn