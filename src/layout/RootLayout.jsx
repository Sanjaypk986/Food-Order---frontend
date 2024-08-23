import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import UserLayout from './UserLayout'

const RootLayout = () => {
  return (
    <>
    <UserLayout/>
    <div className='min-h-96'>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default RootLayout
