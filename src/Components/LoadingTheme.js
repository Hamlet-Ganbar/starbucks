import React, { useContext } from 'react'
import { ProductsContext } from './Context/ProductsContext'

function LoadingTheme() {
    const {loading} =useContext(ProductsContext)
  return (
    <div className={loading ? 'loading-theme' : ''}></div>
  )
}

export default LoadingTheme