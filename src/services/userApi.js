import { axiosInstance } from "../config/axiosInstance";

export const userCreate = async (formData) => {
  try {
    const response = await axiosInstance({
      url: "/user/create",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/user/login",
      method: "POST",
      data
    });

    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userLogout = async () => {
  try {
    const response = await axiosInstance({
      url: "/user/logout",
      method: "GET"
    });
    console.log(response?.data);
    return response?.data;
    
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userProfile = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/profile",
        method: "GET",
      });
  
      return response?.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };