import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RestaurantCreate } from "../../services/restaurantApi";

const RestaurantSignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();

    // Ensure the mobile number includes the +91 prefix
    let mobileNumber = data.mobile;
    if (!mobileNumber.startsWith("+91")) {
      mobileNumber = `+91${mobileNumber.replace(/^\+91/, "")}`;
    }

    // Append form fields to the FormData object
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", mobileNumber); // Updated mobile number
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    // Append file if it exists
    if (data.image && data.image[0]) {
        formData.append("restaurantImage", data.image[0]);
    }

    try {
      const response = await RestaurantCreate(formData);
      setLoading(false);
      if (response.success) {
        toast.success(response.message || "Signup successful");
        navigate("/restaurants");
      } else {
        toast.error(response.message || "Signup failed");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Signup failed";
      toast.error(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-body grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Restaurant Name"
          className={`input input-bordered text-sm ${
            errors.name ? "input-error" : ""
          }`}
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Mobile Number</span>
        </label>
        <div className="flex">
          <span className="p-2 bg-gray-200 rounded-l-md">+91</span>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className={`input input-bordered text-sm w-full ${
              errors.mobile ? "input-error" : ""
            } rounded-l-none`}
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/, // Validate 10 digits
                message: "Invalid mobile number. Enter 10 digits.",
              },
            })}
          />
        </div>
        {errors.mobile && (
          <span className="text-red-500 text-sm mt-1">
            {errors.mobile.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload Profile</span>
        </label>
        <input
          type="file"
          className={`input text-sm ${errors.image ? "input-error" : ""}`}
          {...register("image")}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className={`input input-bordered text-sm ${
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
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className={`input input-bordered text-sm ${
            errors.password ? "input-error" : ""
          }`}
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          className={`input input-bordered text-sm ${
            errors.confirmPassword ? "input-error" : ""
          }`}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          placeholder="Restaurant Location"
          className={`input input-bordered text-sm ${
            errors.location ? "input-error" : ""
          }`}
          {...register("location", {
            required: "Location is required",
          })}
        />
        {errors.location && (
          <span className="text-red-500 text-sm mt-1">
            {errors.location.message}
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          type="text"
          placeholder="Description"
          className={`input input-bordered text-sm ${
            errors.name ? "input-error" : ""
          }`}
          {...register("description", {
            required: "description is required",
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="form-control mt-6 md:col-span-2">
        <button
          type="submit"
          className="btn primary-bg text-white font-semibold w-full"
        >
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "Signup"
          )}
        </button>
      </div>
    </form>
  );
};

export default RestaurantSignupForm;
