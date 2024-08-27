import React, { useEffect } from "react";
import { userLogout } from "../../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const navigate = useNavigate()
  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await userLogout();
        toast.success("Logout successfull");
        navigate('/')
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
