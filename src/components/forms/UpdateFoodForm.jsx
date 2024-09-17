import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { DeleteFood, UpdateFood } from "../../services/foodApi";

const UpdateFoodForm = ({ food }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: food?.name || "",
      price: food?.price || "",
      category: food?.category.join(", ") || "", // Display categories as a comma-string
      description: food?.description || "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();

    // Append form fields to the FormData object
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category", data.category.split(",").map(cat => cat.trim())); // Convert comma-string back to array
    formData.append("description", data.description);

    // Append file if it exists
    if (data.image && data.image[0]) {
      formData.append("foodImage", data.image[0]);
    }

    try {
      const response = await UpdateFood(formData, food._id);
      console.log(response);
      
      setLoading(false);
      if (response) {
        toast.success(response.message || "Update successful");
        navigate("/restaurants/foods");
      } else {
        toast.error(response.message || "Update failed");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Update failed";
      toast.error(errorMessage);
    }
  };

  // Handle item deletion
  const handleItemDelete = async () => {
    try {
      const response = await DeleteFood(food._id);
      console.log(response);
      
      setLoading(false);
      if (response.success) {
        toast.success(response.message || "Delete successful");
        navigate("/restaurants/foods");
      } else {
        toast.error(response.message || "Delete failed");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Delete failed";
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
          className={`input input-bordered text-sm ${
            errors.name ? "input-error" : ""
          }`}
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload Image</span>
        </label>
        <input
          type="file"
          className={`input text-sm ${errors.image ? "input-error" : ""}`}
          {...register("image")}
        />
        {errors.image && (
          <span className="text-red-500 text-sm mt-1">
            {errors.image.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          placeholder="Enter price"
          className={`input input-bordered text-sm ${
            errors.price ? "input-error" : ""
          }`}
          {...register("price", {
            required: "Price is required",
          })}
        />
        {errors.price && (
          <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input
          type="text"
          placeholder="Enter Category"
          className={`input input-bordered text-sm ${
            errors.category ? "input-error" : ""
          }`}
          {...register("category", {
            required: "Category is required",
          })}
        />
        {errors.category && (
          <span className="text-red-500 text-sm mt-1">{errors.category.message}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          placeholder="Description"
          className={`input input-bordered text-sm ${
            errors.description ? "input-error" : ""
          }`}
          {...register("description", {
            required: "Description is required",
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="form-control flex flex-col md:flex-row items-center gap-4 mt-6">
        <button
          type="submit"
          className="btn primary-bg text-white font-semibold w-full md:w-1/2"
        >
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "Update Item"
          )}
        </button>
        <button
          type="button"
          onClick={handleItemDelete}
          className="btn secondary-bg text-white font-semibold w-full md:w-1/2"
        >
          Delete Item
        </button>
      </div>
    </form>
  );
};

export default UpdateFoodForm;
