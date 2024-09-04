import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FoodCard = ({ foods }) => {
    const user = useSelector((state) => state.user.user);
    // Check if user is authenticated or not
  const isUserLoggedIn = user && Object.keys(user).length > 0;

    
  return (
    <Link to={isUserLoggedIn?`/user/order-now/${foods._id}`:`/order-now/${foods._id}`} className="block w-full max-w-xs mx-auto">
      <div className="border border-gray-200 food-card rounded-lg shadow-md p-4 flex flex-col items-center h-80">
        <img
          src={foods.image}
          alt="food"
          className="w-full h-40 object-cover rounded-md"
        />

        <div className="flex flex-col justify-center items-center mt-4 text-center">
          <h4 className="text-md sm:text-lg font-semibold  mb-1">{foods.name}</h4>
          <p className="text-sm  mb-1">{foods.category[0]} , {foods.category[1]}</p>
          <p className="text-sm  mb-2">{foods.restaurant.name}</p>
          <p className="text-lg font-semibold primary-text">
            {foods.price} <span className="text-base ">/ ₹</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
