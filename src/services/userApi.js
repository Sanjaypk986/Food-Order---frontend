import { axiosInstance } from "../config/axiosInstance";

export const userLogin = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/user/login",
      method: "POST",
      data,
      withCredentials: true,
    });

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = async () => {
  try {
    const response = await axiosInstance({
      url: "/user/logout",
      method: "GET",
      withCredentials: true,
    });

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
