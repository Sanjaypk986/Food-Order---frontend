import React from "react";
import { Link } from "react-router-dom";

const RestaurantFoodCard = ({ foods }) => {

  return (
    <div className="block w-full max-w-xs mx-auto my-2">
      <div className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col h-80">
        <img
          src={foods.image}
          alt="food"
          className="w-full h-40 object-cover rounded-md"
        />

        <div className="flex flex-col justify-between mt-4 text-center flex-grow">
          <h4 className="text-md sm:text-lg font-semibold mb-1">{foods.name}</h4>
          <p className="text-sm mb-1">{foods.category[0]} , {foods.category[1]}</p>
          <p className="text-sm mb-2">{foods.restaurant.name}</p>
          <p className="text-lg font-semibold primary-text">
            {foods.price} <span className="text-base">/ ₹</span>
          </p>
          <Link 
            to={`/restaurants/update-food/${foods._id}`} 
            className="mt-4 inline-block font-semibold px-2 py-1 w-1/2 mx-auto text-white bg-green-500 rounded hover:bg-green-600 text-sm text-center"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFoodCard;
