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
        console.log("Logout API response:", response);

        if (response.success) {
          // Check if the token cookie exists before attempting to remove it
          const token = Cookies.get("token");
          if (token) {
            console.log("Token cookie before removal:", token);
            // Clear cookie using js-cookie
            Cookies.remove("token", { path: "/" });
            console.log("Token cookie removed");
          } else {
            console.log("No token cookie to remove");
          }

          dispatch(resetUser()); // Clear the user state in Redux
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
    <main>
      <section>
        <h1>Logging out....</h1>
      </section>
    </main>
  );
};

export default LogoutPage;
