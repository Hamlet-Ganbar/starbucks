import React, { useState } from 'react'
import './FindPlace.css'
import MapPlace from './MapPlace'
import FindPlaceContent from './FindPlaceContent'
import FindFilter from './FindFilter'
import PlaceContent from './PlaceContent'

function FindPlace() {
  const [placeHide, setPlaceHide] = useState(false)

  const closePlaces = () => {
    if (placeHide === true) {
        setPlaceHide(false)
    }
}

  return (
    <>
      <div className='place-flex'>
        <FindPlaceContent placeHide={placeHide} setPlaceHide={setPlaceHide} />
        <MapPlace />
      </div>
      <div onClick={closePlaces} className='containerr mobile'>
          <FindFilter placeHide={placeHide} setPlaceHide={setPlaceHide}/>
          <MapPlace/>
          <PlaceContent placeHide={placeHide} setPlaceHide={setPlaceHide}/>
      </div>
    </>
  )
}

export default FindPlace