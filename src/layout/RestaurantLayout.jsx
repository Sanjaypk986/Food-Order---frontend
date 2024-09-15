import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import useSmoothScroll from '../hooks/scrollView'
import useScrollToTop from '../hooks/useScrollTop'
import RestaurantHeader from '../components/restaurant/RestaurantHeader'

const RestaurantLayout = () => {  
    useScrollToTop();
    useSmoothScroll();
  return (
    <div className="flex flex-col min-h-screen">
    <RestaurantHeader />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default RestaurantLayout
