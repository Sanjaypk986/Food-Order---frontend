import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

const AdminAuth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [admin, setAdmin] = useState(null);
  const adminCheck = async () => {
    try {
      const response = await axiosInstance({
        url: "/admin/check-admin",
        method: "GET",
        withCredentials: true,
      });
      setAdmin(true);
    } catch (error) {
      navigate("/login/admin");
      console.log(error);
    }
  };
  useEffect(() => {
    adminCheck();
  }, [location.pathname]);

  useEffect(() => {
    if (admin === false) {
      navigate("/login/admin");
    }
  }, [admin, navigate]);

  // Return null while checking authentication
  if (admin === null) return null;
  return admin ? children : null;
};

export default AdminAuth;
