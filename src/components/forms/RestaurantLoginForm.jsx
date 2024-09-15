import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch} from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { RestaurantLogin } from "../../services/restaurantApi";
import { setRestaurant } from "../../features/restaurant/restaurantSlice";


const RestaurantLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await RestaurantLogin(data);
      console.log("Login response:", response);

      if (!response.success) {
        throw new Error(response.message || "Login failed");
      }

      setLoading(false);
      toast.success("Login successful");
      dispatch(setRestaurant(response.data));
      navigate("/restaurants");
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error); 
      toast.error("Login failed");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className={`input input-bordered mb-2 ${
            errors.email ? "input-error" : ""
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {/* Error message for Email */}
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className={`input input-bordered mb-2 ${
            errors.password ? "input-error" : ""
          }`}
          {...register("password", {
            required: "Password is required",
          })}
        />
        {/* Error message for Password */}
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <label className="label">
          <a href="#" className="label-text-alt text-blue-500 link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button
          type="submit"
          className="btn primary-bg text-white font-semibold"
        >
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default RestaurantLoginForm;
