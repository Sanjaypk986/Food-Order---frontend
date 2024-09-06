import { axiosInstance } from "../config/axiosInstance";

// Create Coupon
export const createCoupon = async (data) => {
  try {
    const response = await axiosInstance.post(`/coupons/create`, data);
    return response?.data;
  } catch (error) {
    console.log("Error in creating coupon:", error.message);
    return null;
  }
};

// Update Coupon
export const updateCoupon = async (data) => {
  try {
    const response = await axiosInstance.patch(`/coupon/update`, data);
    return response?.data;
  } catch (error) {
    console.log("Error in updating Coupon:", error.message);
    return null;
  }
};

// get all coupon
export const getAllCoupons = async () => {
  try {
    const response = await axiosInstance.get(`/coupons`);
    return response?.data;
  } catch (error) {
    console.log("Error in get all Coupons:", error.message);
    return null;
  }
};

// apply coupon
export const applyCoupon = async (data) => {
  try {
    const response = await axiosInstance.post(`/coupons/apply`, data);
    return response?.data || {}; // Ensure there's always a response
  } catch (error) {
    // Check if error response data exists
    const errorResponse = error.response?.data || {};

    // Return a consistent structure with success and message
    return {
      success: false,
      message: errorResponse.message || "An unexpected error occurred.",
    };
  }
};

// remove coupon frm cart 
export const removeCoupon = async () => {
    try {
      const response = await axiosInstance.delete(`/coupons/cancel`);
      return response?.data || {}; // Ensure there's always a response
    } catch (error) {
      // Check if error response data exists
      const errorResponse = error.response?.data || {};
  
      // Return a consistent structure with success and message
      return {
        success: false,
        message: errorResponse.message || "An unexpected error occurred.",
      };
    }
  };