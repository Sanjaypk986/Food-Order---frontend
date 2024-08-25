import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4500/api/v1/user/login",
        data,
        { withCredentials: true }
      );
      navigate("/user");
    } catch (error) {
      console.log(error);
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
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
