import React, { useContext } from 'react'
import { ProductsContext } from '../../../Context/ProductsContext'
import { NavLink } from 'react-router-dom'
import { nanoid } from 'nanoid'

function Category() {
    const { data } = useContext(ProductsContext)

    const category = [...new Set(data.map(item=>item.category))]
    const subcategory = [...new Set(data.map(item=>item.subcategory))]
    
    return (
        <div className='category'>
           <h3>{category.map(item=>item)}</h3>
           {subcategory.map(item=>  <NavLink 
                                        to={`drinks/${item.toLowerCase().split(' ').join('-')}`} 
                                        key={nanoid()}>
                                        {item}
                                    </NavLink>)}
        </div>
    )
}

export default Category