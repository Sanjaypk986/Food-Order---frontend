import React from 'react'
import CreateFoodForm from '../../components/forms/CreateFoodIForm'

const CreateFood = () => {
  return (
    <main className='container mx-auto px-2'>
        <section className='my-8 lg:w-3/4 mx-auto px-1'>
        <h2 className="font-semibold text-center text-2xl my-5 underline">
          Add Food
        </h2>
    <CreateFoodForm />
        </section>
    </main>
  )
}

export default CreateFood
