import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllFoods } from "../../../services/foodApi";
import { useDispatch, useSelector } from "react-redux";
import { setAllFoods } from "../../../features/food/foodSlice";

const FoodItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.data);
  useEffect(() => {
    const fetchFoodSearch = async () => {
      try {
        const response = await fetchAllFoods();
        dispatch(setAllFoods(response));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoodSearch();
  }, []);

  const handleSearch = (name) => {
    const searchParams = new URLSearchParams();
    searchParams.set("search", name);
    const url = `/order-now?${searchParams.toString()}`;
    navigate(url);
  };

  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">What's on your mind?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {foods.map((food) => (
          <div
            key={food._id}
            className="flex flex-col shadow-lg justify-center items-center gap-2 "
            onClick={() => handleSearch(food.name)}
          >
            <img
              className="rounded-full w-24 h-24 md:w-32 md:h-32 shadow-md "
              src={food.image}
              alt={food.name}
            />
            <p className="font-semibold text-sm md:text-base pb-2">
              {food.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
