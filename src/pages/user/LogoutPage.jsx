import React, { useEffect } from "react";
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
        console.log(response);

        if (response.success) {
          document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
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
