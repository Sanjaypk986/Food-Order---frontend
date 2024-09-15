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
    const response = await axiosInstance.get(`/restaurant/profile/${restaurantId}`);
    return response?.data?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    return [];
  }
};

// restaurant login
export const RestaurantLogin = async (data) => {
  try {
    const response = await axiosInstance.post('/restaurant/login',data);
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    return [];
  }
};

// restaurant create
export const RestaurantCreate = async (data) => {
  try {
    const response = await axiosInstance.post('/restaurant/create',data);
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    return [];
  }
};