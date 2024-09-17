import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllFoods } from "../../../services/foodApi";
import { useDispatch, useSelector } from "react-redux";
import { setAllFoods } from "../../../features/food/foodSlice";

const FoodItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const foods = useSelector((state) => state.food.data);
  const user = useSelector((state) => state.user.user);
  const isUserLoggedIn = user && Object.keys(user).length > 0;

  useEffect(() => {
    const fetchFoodSearch = async () => {
      setLoading(true);
      try {
        const response = await fetchAllFoods();
        dispatch(setAllFoods(response));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchFoodSearch();
  }, [dispatch]);

  const handleSearch = (name) => {
    const searchParams = new URLSearchParams();
    searchParams.set("search", name);
    const url = isUserLoggedIn
      ? `/user/order-now?${searchParams.toString()}`
      : `/order-now?${searchParams.toString()}`;

    navigate(url);
  };

  // Limit the number of displayed items to 6
  const limitedFoods = foods?.slice(0, 6);

  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">What's on your mind?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {limitedFoods?.map((food) => (
          <div
            key={food._id}
            className="flex flex-col shadow-lg justify-center items-center gap-2"
            onClick={() => handleSearch(food.name)}
          >
            {loading ? (
              <div className="skeleton w-24 h-24 rounded-full"></div>
            ) : (
              <>
                <img
                  className="rounded-full w-24 h-24 md:w-32 md:h-32 shadow-md"
                  src={food.image}
                  alt={food.name}
                />
                <p className="font-semibold text-sm md:text-base pb-2">
                  {food.name}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
