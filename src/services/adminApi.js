import { axiosInstance } from "../config/axiosInstance";

// login
export const adminLogin = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/login", data);
    return response?.data;
  } catch (error) {
    console.log("Error fetching all Admin:", error.message);
    return null;
  }
};

//   logout
export const adminLogout = async () => {
  try {
    const response = await axiosInstance.get("/admin/logout");
    return response?.data;
  } catch (error) {
    console.log("Error fetching all admin:", error.message);
    return null;
  }
};

//   get all orders
export const adminAllOrders = async () => {
  try {
    const response = await axiosInstance.get("/admin/orders");
    return response?.data;
  } catch (error) {
    console.log("Error fetching all admin:", error.message);
    return null;
  }
};

//   get all users
export const adminAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/admin/users");
    return response?.data;
  } catch (error) {
    console.log("Error fetching all admin:", error.message);
    return null;
  }
};

//   delete user
export const deleteUser = async (userId) => {
  try {
    const response = await axiosInstance.delete(
      `/admin/users/delete/${userId}`
    );
    return response?.data;
  } catch (error) {
    console.log("Error fetching all admin:", error.message);
    return null;
  }
};

//   get all restaurants
export const adminAllRestaurants = async () => {
    try {
      const response = await axiosInstance.get("/admin/restaurants");
      return response?.data;
    } catch (error) {
      console.log("Error fetching all admin:", error.message);
      return null;
    }
  };

  //   change restaurant status
export const changeRestaurantStatus = async (restaurantId) => {
    try {
      const response = await axiosInstance.patch(`/admin/restaurants/status/${restaurantId}`);
      return response?.data;
    } catch (error) {
      console.log("Error fetching all admin:", error.message);
      return null;
    }
  };

  //   delete restaurant
export const deleteRestaurant = async (restaurantId) => {
    try {
      const response = await axiosInstance.delete(
        `/admin/restaurants/delete/${restaurantId}`
      );
      return response?.data;
    } catch (error) {
      console.log("Error fetching all admin:", error.message);
      return null;
    }
  };