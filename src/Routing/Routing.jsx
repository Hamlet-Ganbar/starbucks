import { Route, Routes} from 'react-router-dom'
import MainLayout from './MainLayout'
import Menu from '../Components/Pages/Menu/Menu'
import Rewards from '../Components/Pages/Rewards/Rewards'
import GiftCards from '../Components/Pages/GiftCards/GiftCards'
import Home from '../Components/Pages/Home/Home'
import Feature from '../Components/Pages/Menu/Feature/Feature'
import AllProducts from '../Components/Pages/Menu/AllProducts/AllProducts'
import PreviousOrder from '../Components/Pages/Menu/PreviousOrder/PreviousOrder'
import Favorites from '../Components/Pages/Menu/Favorites/Favorites'
import SignNow from '../Components/Header/Sign/SignNow'
import Join from '../Components/Header/Join/Join'
import FindPlace from '../Components/Header/FindPlace/FindPlace'
import GiftSeeAll from '../Components/Pages/GiftCards/GiftCard/GiftSeeAll'
import Error from './Error'
import Drinks from '../Components/Pages/Menu/AllProducts/Drinks'
import ProductMain from '../Components/Pages/Menu/AllProducts/ProductMain'
import Product from '../Components/Pages/Menu/AllProducts/Product'
import StoreProduct from '../Components/Pages/Menu/AllProducts/StoreProduct/StoreProduct'

const Routing = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route path='menu' element={<Menu />}>
            <Route path='/menu' element={<AllProducts />}>
              <Route index element={<ProductMain/>}/>
              <Route path='drinks/:sub' element={<Drinks/>}/>
            </Route>
            <Route path='/menu/product/:prod' element={<Product/>}/>
            <Route path='featured' element={<Feature />} />
            <Route path='previous' element={<PreviousOrder />} />
            <Route path='favorites' element={<Favorites />} />
          </Route>

          <Route path='rewards' element={<Rewards />} />
          <Route path='gift/category/:id' element={<GiftSeeAll />} />``
          <Route path='gift' element={<GiftCards />} />
          <Route path='account/signin' element={<SignNow />} />
          <Route path='account/create' element={<Join />} />
          <Route path='store-locator' element={<FindPlace />} />

          <Route path='*' element={<Error />} />
        </Route>
        
          <Route path='/menu/cart' element={<StoreProduct/>}/>
        
      </Routes>

    </>
  )
}

export default Routing