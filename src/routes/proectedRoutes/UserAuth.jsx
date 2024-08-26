import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

const UserAuth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const userCheck = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/check-user",
        method: "GET",
        withCredentials: true,
      });
      setUser(true);
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };
  useEffect(() => {
    userCheck();
  }, [location.pathname]);

  useEffect(() => {
    if (user === false) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Return null while checking authentication
  if (user === null) return null;
  return user ? children : null;
};

export default UserAuth;
