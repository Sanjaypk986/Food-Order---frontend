import React from 'react'
import Banner from './Banner'
import FoodItems from './FoodItems'

const HomePage = () => {
  return (
    <main className='container mx-auto px-1'>
      <section >
      <Banner />
      </section>
    <section >
      <FoodItems />
    </section>
    </main>
  )
}

export default HomePage
