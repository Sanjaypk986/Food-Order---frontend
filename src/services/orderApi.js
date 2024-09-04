import { axiosInstance } from "../config/axiosInstance";

// add to order
export const addToOrder = async () => {
  try {
    const response = await axiosInstance.post("/order/create");
    return response?.data;
  } catch (error) {
    console.log("Error fetching To add order:", error.message);
    return [];
  }
};

// add to order
export const getMyOrder = async () => {
  try {
    const response = await axiosInstance.get("/order/my-orders");
    return response?.data?.data;
  } catch (error) {
    console.log("Error fetching to get my orders:", error.message);
    return [];
  }
};

// cancel order
export const cancelOrder= async (orderId) => {
    try {
      const response = await axiosInstance.patch(`/order/cancel/${orderId}`);
      return response?.data;
    } catch (error) {
      console.log("Error fetching to get my orders:", error.message);
      return [];
    }
  };
