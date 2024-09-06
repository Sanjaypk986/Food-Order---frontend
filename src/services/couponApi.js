import { axiosInstance } from "../config/axiosInstance";


// Create Coupon
export const createCoupon = async (data) => {
    try {
      const response = await axiosInstance.post(`/coupons/create`, 
        data
      );
      return response?.data; 
    } catch (error) {
      console.log("Error in creating coupon:", error.message);
      return null; 
    }
  };


// Update Coupon
export const updateCoupon = async (data) => {
  try {
    const response = await axiosInstance.patch(`/coupon/update`, 
      data
    );
    return response?.data; 
  } catch (error) {
    console.log("Error in updating Coupon:", error.message);
    return null; 
  }
};

// get all coupon 
export const getAllCoupons = async () => {
    try {
      const response = await axiosInstance.get(`/coupons`
      );
      return response?.data; 
    } catch (error) {
      console.log("Error in get all Coupons:", error.message);
      return null; 
    }
  };

  export const applyCoupon = async (data) => {
    try {
      const response = await axiosInstance.post(`/coupons/apply`, data);
      return response?.data || {}; // Ensure there's always a response
    } catch (error) {
      console.log("Error in applying coupon:", error.message);
      return { success: false, message: error.message }; // Return a default error structure
    }
  };
  