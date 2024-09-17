import React, { useEffect, useState } from 'react'
import UpdateFoodForm from '../../components/forms/UpdateFoodForm'
import { fetchFoodsById } from '../../services/foodApi'
import { useParams } from 'react-router-dom'

const UpdateFood = () => {
    const {foodId} = useParams()
    const [food,setFood] = useState(null)
    useEffect(() => {
      const fetchFood = async()=>{
        try {
    const response = await fetchFoodsById(foodId);
    setFood(response)
    
        } catch (error) {
            console.log(error);
            
        }
      }
    fetchFood()
      
    }, [])
    
  return (
    <main className='container mx-auto px-2'>
        <section className='my-8 lg:w-3/4 mx-auto px-1'>
        <h2 className="font-semibold text-center text-2xl my-5 underline">
          Update Food
        </h2>
        {food ? <UpdateFoodForm food={food} /> : <p className='text-center my-8'>Loading...</p>}
        </section>
    </main>
  )
}

export default UpdateFood
