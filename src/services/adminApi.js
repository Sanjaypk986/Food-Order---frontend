import { axiosInstance } from "../config/axiosInstance";

// login
export const AdminLogin = async (data) => {
    try {
      const response = await axiosInstance.post('/admin/login',data);
      return response?.data;
    } catch (error) {
      console.log("Error fetching all Admin:", error.message);
      return null;
    }
  };

//   logout
  export const AdminLogout = async () => {
    try {
      const response = await axiosInstance.get('/admin/logout');
      return response?.data;
    } catch (error) {
      console.log("Error fetching all admin:", error.message);
      return null;
    }
  };