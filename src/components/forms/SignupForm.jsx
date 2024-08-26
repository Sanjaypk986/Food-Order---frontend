import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append other form fields to the FormData object
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    // Append file to the FormData object
    if (data.image[0]) {
      formData.append("userImage", data.image[0]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4500/api/v1/user/create",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the Content-Type is correct for file uploads
          },
        }
      );
      
      navigate("/user");
    } catch (error) {
      console.log("Error Message:", error);
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
          placeholder="Enter your name"
          className={`input input-bordered text-sm ${
            errors.name ? "input-error" : ""
          }`}
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Mobile No</span>
        </label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          className={`input input-bordered text-sm ${
            errors.mobile ? "input-error" : ""
          }`}
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/, // Example pattern for a 10-digit number
              message: "Invalid mobile number.",
            },
          })}
        />
        {errors.mobile && (
          <span className="text-red-500 text-sm">{errors.mobile.message}</span>
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
          <span className="text-red-500 text-sm">{errors.email.message}</span>
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
          <span className="text-red-500 text-sm">
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
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="form-control mt-6 md:col-span-2">
        <button
          type="submit"
          className="btn primary-bg text-white font-semibold w-full"
        >
          Signup
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
