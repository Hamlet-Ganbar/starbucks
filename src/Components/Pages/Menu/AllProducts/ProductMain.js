import React, { useContext } from 'react'
import { ProductsContext } from '../../../Context/ProductsContext'
import { Link} from 'react-router-dom'
import { nanoid } from 'nanoid'

function ProductMain() {
    const { data } = useContext(ProductsContext)
    
    const category = [...new Set(data?.map(item => item.category))]

    const sub = [...new Set(data.map(item => item.subcategory))]

    const filtered =[...new Set(sub.map(item =>data.filter(i=>i.subcategory===item)[0]))]
  

    return (
        <div>
            <h2 className='main-menu'>Menu</h2>

            <h3 className='main-drink'>{category.map(item => item)}</h3>

            <div className='main-products'>
                {filtered.map(item => <Link to={`${item.category.toLowerCase()}/${item.subcategory.toLowerCase().split(' ').join('-')}`} key={nanoid()} className='main-product'>
                                            <img src={item.img} alt={item.subcategory} />
                                            <div>{item.subcategory}</div>
                                      </Link>)}
            </div>
        

        </div>
    )
}

export default ProductMain