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

// restaurant logout
export const RestaurantLogout = async () => {
  try {
    const response = await axiosInstance.get('/restaurant/logout');
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    return [];
  }
};

// restaurant profile
export const AuthRestaurantProfile = async () => {
  try {
    const response = await axiosInstance.get('/restaurant/restaurant/profile'); 
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    throw error;;
  }
};

// restaurant orders
export const RestaurantOrders = async () => {
  try {
    const response = await axiosInstance.get('/restaurant/orders'); 
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Restaurant:", error.message);
    throw error;;
  }
};

// Confirm order
export const ConfirmOrder = async (orderId, status) => { 
  try {
    const response = await axiosInstance.patch(`/restaurant/orders/${orderId}`, { orderId,status });
    return response?.data;
  } catch (error) {
    console.log("Error updating order status:", error.message);
    throw error;
  }
};
