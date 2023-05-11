import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../../Context/ProductsContext'
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import ProductSize from './ProductSize'
import { GoLocation } from 'react-icons/go'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import MenuSticky from '../MenuSticky'
import { Helmet } from 'react-helmet'
import Loading from '../../../Loading'


function Product() {
    const { data } = useContext(ProductsContext)
    const { prod } = useParams()
    const { checkStorage } = useContext(ProductsContext)
    const { setBasketSum } = useContext(ProductsContext)
    const [sized, setSized] = useState(0)
    const { loading } = useContext(ProductsContext)
    
    const findProd = data.find(item => item.id === +prod)
    console.log(prod);
    const selectSize = (e) => {
        setSized(e)
    }
    const basketHandle = () => {
        checkStorage()
        let bask = JSON.parse(localStorage.getItem("productBasket"))
        if (bask.length < 15) {
            bask.push({
                id: nanoid(),
                dataid: findProd.id,
                name: findProd.name,
                img: findProd.img,
                size: findProd.sizes[sized].size,
                star: "200★ item",
            })
        }
        localStorage.setItem("productBasket", JSON.stringify(bask))
        setBasketSum(JSON.parse(localStorage.getItem("productBasket")).length)
    }

    return (
        <>
            <Helmet>
                <title>
                    {findProd?.name}
                </title>
            </Helmet>

            {loading ? <Loading /> :
                <>
                    <div className='containerr product'>
                        <div className='drinks-path'>
                            <Link to="/menu">Menu / </Link><Link to={`/menu/${findProd?.category.toLowerCase()}/${findProd?.subcategory.toLowerCase().split(' ').join("-")}`}> &nbsp; {findProd?.subcategory}</Link> /&nbsp;{findProd?.name}
                        </div>
                    </div>

                    <div className='prod-bg'>
                        <div className='product-content containerr'>
                            <img src={findProd?.img} alt="" />
                            <div className='product-info'>
                                <h3>{findProd?.name}</h3>
                                <span>{findProd?.sizes[sized].calories} <sup ><AiOutlineInfoCircle /></sup></span>
                            </div>
                        </div>
                    </div>
                    <div className='containerr product-flex'>
                        <div className='size-section'>
                            <h5>Size options</h5>
                            <div className='product-sizes'>
                                {findProd?.sizes?.map((item, i) => {
                                    return (
                                        <div key={nanoid()} >
                                            <ProductSize {...item} selectSize={selectSize} i={i} sized={sized} />
                                        </div>
                                    )
                                })}
                            </div>
                            <p><GoLocation />  Select a store to view availability</p>
                        </div>
                        <div className='customization'>
                            <h5>Customizations</h5>
                            <div className='custom-select'>
                                <div><span>Milk</span>
                                    <p>Oatmilk</p> <button>Edit</button>
                                </div>
                                <div>
                                    <p>Chocolate</p> <button>Edit</button>
                                </div>
                                <div>
                                    <p>Toppings</p> <button>Edit</button>
                                </div>
                                <div>
                                    <p>Tea</p> <button>Edit</button>
                                </div>
                                <div>
                                    <p>Sweeteners</p> <button>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={basketHandle} className='product-order'>Add to Order</button>
                    <MenuSticky /> </>}
        </>
    )
}

export default Product