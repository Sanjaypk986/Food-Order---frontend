import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchFoodsById } from '../../services/foodApi';

export async function loader({ params }) {
    const response = await fetchFoodsById(params.foodId)
    console.log(response);
    
    const food= response
    return { food};
  }
const FoodDetails = () => {

const {food} = useLoaderData()
  return (
    <main className='container mx-auto p-4 md:p-8'>
      <section className=' rounded-lg shadow-lg my-8 p-6'>
        <div className='flex flex-col lg:flex-row md:space-x-8'>
          <div className='flex-1 flex justify-center'>
            <img
              className=' object-cover max-h-80 rounded-lg shadow-md md:mb-3'
              src={food.image}
              alt="Food"
            />
          </div>
          <div className='flex-1 mt-6 md:mt-0 '>
            <h2 className='text-3xl  font-bold mb-3 '>{food.name}</h2>
            <p className='text-md   mb-3 '>{food.category[0]} , {food.category[1]}</p>
            <p className='text-2xl  font-semibold primary-text mb-3'>{food.price}₹</p>
            <p className=' text-sm md:text-md break-words mb-6'>
              {food.description}
            </p>
            <div className='flex flex-col space-y-4 '>
              <button className='secondary-bg  font-semibold text-white px-6 py-3 rounded-lg shadow-md  transition duration-300'>
                Add to Cart
              </button>
              <button className='primary-bg  font-semibold text-white px-6 py-3 rounded-lg shadow-md  transition duration-300'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-10 p-6'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Restaurant Overview</h2>
      <div className='relative bg-cover bg-center bg-gray-50 rounded-lg shadow-lg p-4 ' style={{ backgroundImage: `url('${food.restaurant.image}')` }}>
  <div className='absolute inset-0 bg-black bg-opacity-40'></div>
  <div className='relative z-10 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='md:col-span-1'>
        <img
          className='w-full h-48 object-cover rounded-lg shadow-md'
          src={food.restaurant.image}
          alt="Restaurant"
        />
      </div>
      <div className='md:col-span-2'>
        <h3 className='text-xl font-semibold mb-2 text-gray-800'>{food.restaurant.name}</h3>
        <p className='text-md mb-2 text-gray-600'>{food.restaurant.location}</p>
        <p className='text-md mb-4 text-gray-600'>{food.restaurant.mobile}</p>
        <p className='text-sm md:text-md text-gray-700 break-words'>
        {food.restaurant.description}
        </p>
      </div>
    </div>
  </div>
  </div>
</section>


    </main>
  );
};

export default FoodDetails;
