import React, { useContext } from 'react'
import { MainContext } from '../../../Context/Context'
import { nanoid } from 'nanoid'
import { useLocation } from 'react-router-dom'

function GiftSeeAll() {

    const { data } = useContext(MainContext)
    
    const location = useLocation()
   
    // const a = location.pathname.slice(15, 20)
    const seeFilter = data.filter(item => item.see.length > 0)
    const giftArr = seeFilter.find(item => item.category.toLowerCase().split(' ').join('-')===location.pathname.slice(15))
    return (

        <div className='seeAll'>
            <div className='containerr'>
                <h3>Gift Cards</h3>
                <h5>{giftArr?.category}</h5>
                <div className='see-flex'>
                    {giftArr?.cards.map((item) => {
                        return <div key={nanoid()}>
                            <img className='carousel-img' src={item} alt="" />
                        </div>
                    })}
                </div>
            </div>


        </div>
    )
}

export default GiftSeeAll



