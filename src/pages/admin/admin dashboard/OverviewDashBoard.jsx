import React from 'react'

const OverviewDashBoard = () => {
  return (
    <section className="w-full md:w-4/5 p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Dashboard <span className="primary-text">Overview</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card flex bg-indigo-600 text-white h-24 shadow-lg p-4 items-center justify-center">
            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title text-white text-center text-base md:text-lg">
                Total Orders
              </h2>
              <p className="text-center">120 Orders</p>
            </div>
          </div>

          <div className="card bg-teal-500 text-white h-24 shadow-lg p-4 items-center justify-center">
            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title text-white text-center text-base md:text-lg whitespace-nowrap">
                Total Food Items
              </h2>
              <p className="text-center">54 Items</p>
            </div>
          </div>

          <div className="card bg-amber-500 text-white h-24 shadow-lg p-4 items-center justify-center">
            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title text-white text-center text-base md:text-lg">
                Total Users
              </h2>
              <p className="text-center">300 Users</p>
            </div>
          </div>

          <div className="card bg-rose-600 text-white h-24 shadow-lg p-4 items-center justify-center">
            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title text-white text-center text-base md:text-lg whitespace-nowrap">
                Total Restaurants
              </h2>
              <p className="text-center">50 Restaurants</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OverviewDashBoard
