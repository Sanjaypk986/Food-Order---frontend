import React from "react";
import RestaurantProfile from "./RestaurantProfile";
import RestaurantCoupon from "./RestaurantCoupon";
import MenuRestaurant from "./MenuRestaurant";

const RestaurantDetails = () => {
  return (
    <main className="container mx-auto px-1 min-h-screen lg:w-3/4">
      <RestaurantProfile />
     <RestaurantCoupon />
     <MenuRestaurant />
    </main>
  );
};

export default RestaurantDetails;
