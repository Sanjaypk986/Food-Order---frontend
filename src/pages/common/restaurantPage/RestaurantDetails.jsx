import React, { useState } from "react";
import RestaurantProfile from "./RestaurantProfile";
import RestaurantCoupon from "./RestaurantCoupon";
import MenuRestaurant from "./MenuRestaurant";
import RecommndedFoods from "./RecommndedFoods";
import { fetchRestaurantProfile } from "../../../services/restaurantApi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCart } from "../../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../services/cartApi";
import toast from "react-hot-toast";

// loader
export async function loader({ params }) {
  const response = await fetchRestaurantProfile(params.restaurantId);
  const restaurant = response.restaurant;
  const foods = response.foods
  
  return { restaurant,foods};
}

const RestaurantDetails = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isUserLoggedIn = user && Object.keys(user).length > 0;
  const [loading,setLoading] = useState(false)
    const {restaurant,foods} = useLoaderData()
    const handleAddToCart = async (foodId) => {
      try {
        if (isUserLoggedIn) {

          setLoading(true);
          const quantity = 1;
          const response = await addToCart(foodId, quantity);

          if (!response.cart) {
            toast.error(response.message);
          }
          setLoading(false);
          dispatch(getCart(response.cart));
          toast.success(response.message);
        } else {
          setLoading(false);
          navigate("/login");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <main className="container mx-auto px-1 min-h-screen lg:w-3/4">
      <RestaurantProfile restaurant={restaurant} />
     <RestaurantCoupon />
     <MenuRestaurant foods={foods} handleCart={handleAddToCart} />
     <RecommndedFoods foods={foods} handleCart={handleAddToCart}/>
    </main>
  );
};

export default RestaurantDetails;
