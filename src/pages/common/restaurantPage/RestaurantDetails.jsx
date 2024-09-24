import React from "react";
import RestaurantProfile from "./RestaurantProfile";
import RestaurantCoupon from "./RestaurantCoupon";
import MenuRestaurant from "./MenuRestaurant";
import RecommndedFoods from "./RecommndedFoods";
import { fetchRestaurantProfile } from "../../../services/restaurantApi";
import { useLoaderData, useNavigate } from "react-router-dom";

// loader
export async function loader({ params }) {
  const response = await fetchRestaurantProfile(params.restaurantId);
  const restaurant = response.restaurant;
  const foods = response.foods
  
  return { restaurant,foods};
}

const RestaurantDetails = () => {
    const {restaurant,foods} = useLoaderData()
  return (
    <main className="container mx-auto px-1 min-h-screen lg:w-3/4">
      <RestaurantProfile restaurant={restaurant} />
     <RestaurantCoupon />
     <MenuRestaurant foods={foods} />
     <RecommndedFoods foods={foods} />
    </main>
  );
};

export default RestaurantDetails;
