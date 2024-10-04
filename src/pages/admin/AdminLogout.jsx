import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { adminLogout } from "../../services/adminApi";

const AdminLogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await adminLogout();
        toast.success("Logout successful");
        navigate("/");
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("An error occurred during logout");
      }
    };

    logOut();
  }, [navigate]);

  return (
    <main className="container mx-auto px-2 min-h-screen">
      <section>
        <h1>Logging out....</h1>
      </section>
    </main>
  );
};

export default AdminLogoutPage;
