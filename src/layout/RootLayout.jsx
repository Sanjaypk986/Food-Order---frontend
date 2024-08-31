import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import useSmoothScroll from '../hooks/scrollView'

const RootLayout = () => {
  useSmoothScroll();
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default RootLayout
