import React, { useEffect } from "react";
import { userLogout } from "../../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser } from "../../features/user/userSlice";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await userLogout();
        if (response.success) {
          dispatch(resetUser()); // Clear the user state in Redux
          toast.success("Logout successful");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    logOut();
  }, []);

  return (
    <main>
      <section>
        <h1>Logging out....</h1>
      </section>
    </main>
  );
};

export default LogoutPage;
