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
