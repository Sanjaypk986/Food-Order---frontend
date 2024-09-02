import { axiosInstance } from "../config/axiosInstance";

// add to cart
export const addToCart = async (foodId, quantity) => {
  try {
    const response = await axiosInstance.post("/cart/add-cart", {
      foodId,
      quantity,
    });
    return response?.data;
  } catch (error) {
    console.log("Error fetching Cart:", error.message);
    return [];
  }
};

//   view cart details
export const viewCartDetails = async () => {
  try {
    const response = await axiosInstance.get("/cart/view-cart");
    return response?.data;
  } catch (error) {
    console.log("Error fetching Cart:", error.message);
    return [];
  }
};

// remove item
export const removeCartItem = async (foodId) => {
  try {
    const response = await axiosInstance.delete(`/cart/remove-item`, {
      data: { foodId },
    });
    return response?.data;
  } catch (error) {
    console.log("Error removing item from Cart:", error.message);
    return [];
  }
};

// update quantity
export const updateQuantity = async (foodId, quantity) => {
  try {

    const response = await axiosInstance.patch(`/cart/update-item`, {
      foodId, quantity
    });
    return response?.data;
  } catch (error) {
    console.log("Error in updating quantity :", error.message);
    return [];
  }
};
