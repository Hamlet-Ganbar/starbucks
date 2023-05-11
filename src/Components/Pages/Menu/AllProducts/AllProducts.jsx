import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MenuSticky from '../MenuSticky'
import './AllProducts.css'
import Category from './Category'
import { Outlet } from 'react-router-dom'
import { ProductsContext } from '../../../Context/ProductsContext'
import Loading from '../../../Loading'

function AllProducts() {
  const { loading } = useContext(ProductsContext)

  return (
    <>
      <Helmet>
        <title>
          Menu: Starbucks Cofee Company
        </title>
      </Helmet>
      {loading ? <Loading /> :
        <><div>
          <div className="containerr all-data">
            <Category />
            <div style={{ width: '80%' }}>
              <Outlet />
            </div>
          </div>
          <MenuSticky />
        </div></>}
    </>
  )
}

export default AllProducts