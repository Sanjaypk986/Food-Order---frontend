import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/user/userHeader'

const RootLayout = () => {
  return (
    <>
    <UserHeader />
    <div className='min-h-96'>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default RootLayout
