import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductsContext } from '../../../Context/ProductsContext'
import { nanoid } from 'nanoid'
import DrinkCard from './DrinkCard'
import { Helmet } from 'react-helmet'

function Drinks() {
  const { sub } = useParams()

  const { data } = useContext(ProductsContext)

  const subCategory = data.find(item => item.subcategory.toLowerCase().split(" ").join('-') === sub)?.subcategory
  const cofees = [...new Set(data.filter(item => item.subcategory === subCategory).map(item => item.type))]


  return (
    <>
      <Helmet>
        <title>
          {subCategory}
        </title>
      </Helmet>
      <div>

        <div className='drinks-path'><Link to='/menu'>Menu</Link> / <span>{subCategory}</span> </div>
        <h4 className='subcategory'>{subCategory}</h4>
        {cofees.map(item => {
          return <div className='drinks-type' key={nanoid()}> {item ? <h5>{item}</h5> : ''}
            <div className='drink-card'>{data.filter(prod => prod.type === item)
              .map(item => <DrinkCard key={nanoid()} {...item} />)}
            </div>
          </div>

        })}

      </div>
    </>
  )
}

export default Drinks