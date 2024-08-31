import { axiosInstance } from "../config/axiosInstance";

export const getAllFoods = async () => {
    try {
      const response = await axiosInstance({
        url: "/food",
        method: "GET",
      });
  
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };