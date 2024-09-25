import React, { useState } from "react";

const RestaurantAccordion = ({ food, handleCart }) => {
  const [loading, setloading] = useState(false);

  const handleAdd = (foodId) => {
    setloading(true);
    try {
      handleCart(foodId);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-2 flex justify-between items-start p-1 pb-3 border-b">
      <div className="flex flex-col justify-start gap-1 w-3/4 md:w-3/4">
        <p className="font-bold">{food.name}</p>
        <p className="font-semibold">₹{food.price}</p>
        <div className="flex gap-3 items-center justify-start text-sm">
          <i className="fa-solid fa-star text-green-600"> 4.4</i>
          <span>(420)</span>
        </div>
        <p className="hidden md:flex text-sm text-gray-600">
          {food.description}
        </p>
      </div>

      <div className="relative w-36 h-36">
        <img
          className="w-full h-full rounded-xl object-cover"
          src={food.image}
          alt={food.name}
        />
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          <button
            onClick={() => {
              handleAdd(food._id);
            }}
            className="text-green-600 font-semibold text-xs md:text-sm py-1 px-4 md:px-6 rounded-lg bg-white"
          >
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Add"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAccordion;
