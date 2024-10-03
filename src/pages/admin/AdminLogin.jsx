import React from 'react'
import AdminLoginForm from '../../components/forms/AdminLoginForm'

const AdminLogin = () => {
  return (
    <main className="container mx-auto px-1">
      <section className="my-8 ">
        <h2 className="font-semibold text-center text-2xl my-5 underline">
          Admin Login
        </h2>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto lg:mx-0">
          <AdminLoginForm/>
        </div>
      </div>
    </section>
  </main>
  )
}

export default AdminLogin
