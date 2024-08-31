import { axiosInstance } from "../config/axiosInstance";

// get all foods
export const fetchAllFoods = async () => {
  try {
    const response = await axiosInstance.get("/food");
    return response?.data?.data;
  } catch (error) {
    console.log("Error fetching all foods:", error.message);
    return [];
  }
};

// Fetch foods with search, category, and sort parameters
export const fetchFoodsBySearch = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/food/search", { params });
    return response?.data?.foods || [];
  } catch (error) {
    console.log("Error fetching foods by search:", error.message);
    return [];
  }
};

// single food details
export const fetchFoodsById = async (foodId) => {
  try {
    const response = await axiosInstance.get(`/food/${foodId}`);
    return response?.data.food;
  } catch (error) {
    console.log("Error fetching food by id:", error.message);
    return null;
  }
};
