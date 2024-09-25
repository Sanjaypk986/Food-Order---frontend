import { GitCommitHorizontal, Search } from "lucide-react";
import React, { useState } from "react";
import { set } from "react-hook-form";

const MenuRestaurant = ({ foods, handleCart }) => {
  const [loading, setLoading] = useState(false);
  // Limit the foods array to the first 3 items
  const limitedFoods = foods.slice(0, 3);
  const handleAddCart = (foodId) => {
    setLoading(true);
    try {
      handleCart(foodId);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="p-6">
        <div className="lg:w-10/12 mx-auto py-2 border-b">
          <h5 className="justify-center text-sm font-semibold flex items-center gap-2 my-3">
            <GitCommitHorizontal />
            <span>MENU</span>
            <GitCommitHorizontal />
          </h5>
          <div className="mx-auto flex justify-center mb-4 items-center gap-2 bg-gray-100 p-2 px-4 rounded-xl">
            <input
              type="text"
              placeholder="Search for dishes..."
              className="p-2 w-full border-none outline-none text-center bg-gray-100 text-sm text-gray-700"
            />
            <Search className="w-6 h-6 text-gray-500 cursor-pointer" />
          </div>
          <div className="my-3 flex justify-start items-center gap-2">
            <div className="p-2 border border-gray-300 rounded-3xl inline-block cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-green-600 flex justify-center items-center gap-1">
                  <img
                    className="w-4 h-4"
                    src="https://img.icons8.com/?size=96&id=61083&format=png"
                    alt="vegetarian"
                  />
                  Pure-veg
                </span>
              </div>
            </div>
            <div className="p-2 border border-gray-300 rounded-3xl inline-block cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold flex justify-center items-center gap-1">
                  <img
                    className="w-4 h-4"
                    src="https://img.icons8.com/?size=48&id=61082&format=png"
                    alt="Non-veg"
                  />
                  Non-veg
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 border-b lg:w-10/12 mx-auto pb-3">
        <div>
          <h4 className="md:text-lg font-bold mb-4">Top Picks</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {limitedFoods?.map((food) => (
              <div className="relative" key={food._id}>
                <img
                  className="w-full h-48 md:w-56 md:h-56 rounded-xl object-cover"
                  src={food.image}
                  alt={food.name}
                />
                <div className="absolute top-4 left-0 right-12 flex justify-center">
                  <span className="text-white text-xs md:text-sm font-bold bg-black bg-opacity-30 px-2 py-1 rounded-md">
                    {food.name}
                  </span>
                </div>
                <div className="absolute bottom-4 left-12 right-0 flex justify-center">
                  <button
                    onClick={() => {
                      handleAddCart(food._id);
                    }}
                    className="text-green-600 font-semibold text-sm md:text-md py-1 px-4 md:px-6 rounded-lg bg-white"
                  >
                    {loading ? (
                      <span className="loading loading-dots loading-md"></span>
                    ) : (
                      "Add"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuRestaurant;
