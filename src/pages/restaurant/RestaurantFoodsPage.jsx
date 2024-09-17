import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantFoodCard from "../../components/RestaurantFoodCard";
import { AuthRestaurantProfile } from "../../services/restaurantApi";
import { setRestaurant } from "../../features/restaurant/restaurantSlice";
import { Link } from "react-router-dom";

const RestaurantFoodsPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant.restaurant);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await AuthRestaurantProfile();
        console.log(response.data);

        dispatch(setRestaurant(response.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProfile();
  }, [dispatch]);

  return (
    <main className="container mx-auto px-2">
      <section className="my-8 lg:w-3/4 mx-auto px-1">
        <h2 className="font-semibold text-center text-2xl my-5 underline">
          Food Management
        </h2>
        <p className="mb-6">
          Easily update, add, or remove food items from your menu.
        </p>
        {loading ? (
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ) : restaurant?.foods?.length > 0 ? (
          <div className="grid lg:w-3/4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurant?.foods.map((food) => (
              <RestaurantFoodCard foods={food} key={food._id} />
            ))}
          </div>
        ) : (
          <p>No food items available. Please add some items to the menu.</p>
        )}
      </section>
      <section className="my-3 pb-3 flex justify-center items-center">
        <Link to={'/restaurants/create-food'} className="btn secondary-bg">Add Food Item</Link>
      </section>
    </main>
  );
};

export default RestaurantFoodsPage;
