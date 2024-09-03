import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { userLogout } from "../../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser } from "../../features/user/userSlice";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await userLogout();
        console.log("Logout API response:", response); // Debug: Log response

        if (response.success) {
          // Clear cookie using js-cookie
          Cookies.remove("token", { path: "/" });
          console.log("Token cookie removed"); // Debug: Log cookie removal

          dispatch(resetUser()); // Clear the user state in Redux
          toast.success("Logout successful");
          navigate("/");
        } else {
          console.error("Logout failed:", response); // Debug: Log failure reason
          toast.error("Logout failed");
        }
      } catch (error) {
        console.error("Logout error:", error); // Debug: Log error
        toast.error("An error occurred during logout");
      }
    };

    logOut();
  }, [navigate, dispatch]);

  return (
    <main>
      <section>
        <h1>Logging out....</h1>
      </section>
    </main>
  );
};

export default LogoutPage;
