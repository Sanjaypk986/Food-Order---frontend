import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/user/userHeader'

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <UserHeader />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default UserLayout
