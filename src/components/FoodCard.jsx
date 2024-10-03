import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FoodCard = ({ foods }) => {
  const user = useSelector((state) => state.user.user);
  // Check if user is authenticated or not
  const isUserLoggedIn = user && Object.keys(user).length > 0;

  return (
    <Link
      to={
        isUserLoggedIn
          ? `/user/order-now/${foods._id}`
          : `/order-now/${foods._id}`
      }
      className="block w-full max-w-xs mx-auto"
      data-aos="zoom-in-up"
    >
      <div className=" rounded-xl  hover:shadow-xl transition-shadow duration-300 ease-in-out w-full h-60 relative overflow-hidden bg-white">
        <img
          src={foods.image}
          alt={foods.name}
          className="w-full h-3/5 object-cover rounded-lg"
        />

        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white via-white/90 to-transparent p-4 flex justify-between items-center rounded-b-2xl">
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-semibold text-gray-700">
              {foods.name}
            </h4>
            <p className="text-sm text-gray-600">
              {foods.category[0]} · {foods.category[1]}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-lg font-bold primary-text">₹{foods.price}</p>
            <span className="text-green-500 font-semibold  text-xs px-2 py-1 rounded-full">
              Fast Delivery
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
