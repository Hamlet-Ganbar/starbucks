import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/Context'

function JoinBtn({colorGreen, comeBtn, children}) {
  const {closeBar}=useContext(MainContext)

  return (
    <div>
          <Link to='/account/create'><button onClick={closeBar} className={`joinBtn ${colorGreen} ${comeBtn}` }>{children}</button></Link>
    </div>
  )
}

export default JoinBtn