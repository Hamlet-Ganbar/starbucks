import React from 'react'
import { Link } from 'react-router-dom'

function DrinkCard({ img, name,id }) {  

    return (
        <div className='drink-card-cont'>
            <Link to={`/menu/product/${id}`}>
                <div className='drink-img'><img src={img} alt={name} /></div>
                <p>{name}</p>
            </Link>
        </div>
    )
}

export default DrinkCard