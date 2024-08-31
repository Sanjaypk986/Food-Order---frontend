import { IndianRupee } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({foods}) => {
  return (
    <Link to={`/order-now/${foods._id}`}>
    <div className="border border-gray-200 bg-white rounded-lg shadow-md p-4 grid grid-cols-2 gap-4">
      <img
        src={foods.image}
        alt="food"
        className="w-full h-full object-cover rounded-md"
      />

      <div className="flex flex-col justify-center items-center">
        <h4 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">{foods.name}</h4>
        <p className="text-sm text-gray-500 mb-1">{foods.category[0]} , {foods.category[1]}</p>
        <p className="text-sm text-gray-700 mb-4">{foods.restaurant.name}</p>
        <p className="text-lg font-semibold  primary-text">{foods.price} <span className="text-base text-gray-700">/ ₹</span></p>
      </div>
    </div>
    </Link>
  );
};

export default FoodCard;
