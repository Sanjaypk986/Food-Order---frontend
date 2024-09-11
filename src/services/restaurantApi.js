import { axiosInstance } from "../config/axiosInstance";

// get all restaurants
export const fetchAllRestaurant = async () => {
  try {
    const response = await axiosInstance.get("/restaurant");
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    return [];
  }
};

// get restaurnt by id 
export const fetchRestaurantProfile = async (restaurantId) => {
  try {
    const response = await axiosInstance.get(`/restaurant//profile/${restaurantId}`);
    return response?.data?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    return [];
  }
};