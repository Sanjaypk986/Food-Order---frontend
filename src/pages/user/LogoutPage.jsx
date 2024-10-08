import React, { useEffect } from "react";
import { userLogout } from "../../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await userLogout();
        console.log("Logout API response:", response);

        if (response.success) {
          toast.success("Logout successful");
          navigate("/");
        } else {
          toast.error("Logout failed");
        }
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("An error occurred during logout");
      }
    };

    logOut();
  }, [navigate, dispatch]);

  return (
    <main className="flex items-center justify-center min-h-screen ">
    <section className="bg-white rounded-lg shadow-md p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Logging Out...</h1>
      <p className="text-gray-600">Please wait while we log you out.</p>
      <div className="flex justify-center mt-4">
        <svg
          className="animate-spin h-8 w-8 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 10-8 8z"
          />
        </svg>
      </div>
    </section>
  </main>
  );
};

export default LogoutPage;
