import { axiosInstance } from "../config/axiosInstance";


// Create Address
export const createAddress = async (data) => {
    try {
      const response = await axiosInstance.post(`/address/create`, 
        data
      );
      return response?.data; 
    } catch (error) {
      console.log("Error in creating Address:", error.message);
      return null; 
    }
  };


// Update Address
export const updateAddress = async (data) => {
  try {
    const response = await axiosInstance.patch(`/address/update`, 
      data
    );
    return response?.data; 
  } catch (error) {
    console.log("Error in updating Address:", error.message);
    return null; 
  }
};
