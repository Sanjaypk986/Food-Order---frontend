import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { fetchRestaurantProfile } from '../../services/restaurantApi';
import FoodCard from '../../components/FoodCard';

// loader
export async function loader({ params }) {
    const response = await fetchRestaurantProfile(params.restaurantId);
    const restaurant = response.restaurant;
    const foods = response.foods
    
    return { restaurant,foods};
  }

const RestaurantPage = () => {
    const navigate = useNavigate()
    const {restaurant,foods} = useLoaderData()
  return (
    <main className='container mx-auto p-4'>
      {/* Restaurant Profile Section */}
      
      <section className="mb-2 p-6">
      <div>
      <button
          onClick={() => navigate(-1)}
          className="mb-4 text-primary hover:underline my-2"
        >
          &lt; Back
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Restaurant Overview
        </h2>
      </div>
        <div
          className="relative bg-cover bg-center bg-gray-50 rounded-lg shadow-lg p-4 "
          style={{ backgroundImage: `url('${restaurant.image}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  src={restaurant.image}
                  alt="Restaurant"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {restaurant.name}
                </h3>
                <p className="text-md mb-2 text-gray-600">
                  {restaurant.location}
                </p>
                <p className="text-md mb-4 text-gray-600">
                  {restaurant.mobile}
                </p>
                <p className="text-sm md:text-md text-gray-700 break-words">
                  {restaurant.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Available Food Section */}
      <section className='mt-8'>
        <h2 className='text-lg lg:text-xl font-semibold mb-4'>Available Food</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {foods?.map((food) => (
            <FoodCard foods={food} key={food._id}/>
          ))}
        </div>
      </section>
    </main>
  );
};

// Example usage with mock data
const mockRestaurant = {
  name: "Spice Hub",
  location: "123 Food St, City Center",
  mobile: "+91-9876543210",
  description: "We offer a wide variety of delicious dishes made with fresh ingredients. Come enjoy a unique culinary experience.",
  image: "https://via.placeholder.com/150",
  foods: [
    {
      _id: 1,
      name: "Chicken Biryani",
      description: "Delicious and flavorful chicken biryani served with raita.",
      price: 250,
      image: "https://via.placeholder.com/150"
    },
    {
      _id: 2,
      name: "Paneer Butter Masala",
      description: "Creamy paneer in a rich tomato gravy with Indian spices.",
      price: 200,
      image: "https://via.placeholder.com/150"
    },
    {
      _id: 3,
      name: "Garlic Naan",
      description: "Freshly baked garlic naan to complement your meal.",
      price: 50,
      image: "https://via.placeholder.com/150"
    },
  ]
};

// Use the mock restaurant data in the page
const App = () => <RestaurantPage restaurant={mockRestaurant} />;

export default App;
