import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

const RestaurantAuth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [restaurant, setRestaurant] = useState(null);
  const restaurantCheck = async () => {
    try {
      const response = await axiosInstance({
        url: "/restaurant/check-restaurant",
        method: "GET",
        withCredentials: true,
      });
      setRestaurant(true);
    } catch (error) {
      navigate("/restaurant/login");
      console.log(error);
    }
  };
  useEffect(() => {
    restaurantCheck();
  }, [location.pathname]);

  useEffect(() => {
    if (restaurant === false) {
      navigate("/restaurants/login");
    }
  }, [restaurant, navigate]);

  // Return null while checking authentication
  if (restaurant === null) return null;
  return restaurant ? children : null;
};

export default RestaurantAuth;
