import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RestaurantReset } from "../../services/restaurantApi";

const RestaurantResetPassword = () => {
  const [resetRequested, setResetRequested] = useState(false);
  // fetches current URL details
  const location = useLocation();
  // to store token from url
  const [token, setToken] = useState("");
  // to show reset message
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // to get url value after ? mark
    const searchParams = new URLSearchParams(location.search);
    const tokenQuery = searchParams.get("token");
    if (tokenQuery) {
      setToken(tokenQuery);
    }
  }, [location]); // add location in dependancy array to render when location change.

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    const newPassword = data.password;
    try {
      const response = await RestaurantReset(token, newPassword);
      setResetRequested(true);
      toast.success(response.data);
      setLoading(false);
      navigate("/restaurant/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMessage(error.response.data); // Display error message from backend
    }
  };

  return (
    <main className="flex flex-col min-h-96">
      <h2 className="font-semibold text-center text-2xl my-5 py-3 underline">
        Reset <span>Password</span>
      </h2>
      <section className="container mx-auto flex flex-col justify-center items-center">
        <div className="w-full  md:w-3/4 flex justify-center items-center p-8 ">
          {resetRequested ? (
            <div className="text-center">
              <p className="text-lg text-green-600">
                Password reset successful!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex  flex-col items-center justify-center w-full md:w-3/4 p-6 gap-4 min-h-[200px] rounded-lg shadow-lg"
            >
              <input
                {...register("password", {
                  required: "This field is required",
                })}
                type="password"
                placeholder="Type New Password"
                className="w-3/4 text-md shadow-sm px-4 py-2 text-sm border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              {errors.password && (
                <span className="text-red-500 text-center">
                  {errors.password.message}
                </span>
              )}
              <input
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm Password"
                className="w-3/4 text-md text-sm shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}

              <button
                type="submit"
                className="primary-bg py-2 px-5 text-sm rounded-lg text-white font-semibold mt-4"
              >
                {loading ? (
                  <span className="loading loading-dots loading-sm"></span>
                ) : (
                  "Reset Password"
                )}
              </button>
              {message && <p className="text-red-600">{message}</p>}
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default RestaurantResetPassword;
