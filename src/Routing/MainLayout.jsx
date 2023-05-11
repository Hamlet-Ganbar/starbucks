import React, { useContext } from 'react'
import Header from '../Components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import './MainLayout.css'
import { MainContext } from '../Components/Context/Context'
import { ProductsContext } from '../Components/Context/ProductsContext'
import LoadingTheme from '../Components/LoadingTheme'

function MainLayout() {
  const location = useLocation()
  const { hambur } = useContext(MainContext)
  const { setHambur } = useContext(MainContext)
  const { setMenuOpen } = useContext(MainContext)
  const closeBar = () => {
    setHambur(false)
    setMenuOpen(false)
  }
  const {loading} =useContext(ProductsContext)

  return (
    <>
      {loading? <LoadingTheme/> : ''}
      <div className={hambur ? "main-layout scroll-lock" : "main-layout"}>
        <Header />
        <Outlet />
        {(location.pathname !== "/store-locator") ? <Footer /> : ""}
        <div onClick={closeBar} className={hambur ? "overlay-page overlay-open" : "overlay-page"}></div>
      </div>
    </>

  )
}

export default MainLayout