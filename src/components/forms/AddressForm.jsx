import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAddress, updateAddress } from "../../services/addressApi";
import { setAddress } from "../../features/address/addressSlice";

const AddressForm = ({ setEditing }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Use reset to set default values easily
  } = useForm({
    defaultValues: {
      firstname: address?.firstname || "",
      lastname: address?.lastname || "",
      city: address?.city || "",
      street: address?.street || "",
      mobile: address?.mobile || "",
      pincode: address?.pincode || "",
    },
  });

  const onSubmit = async (data) => {
    if (address) {
      setLoading(true);
      try {
        const response = await updateAddress(data);
        console.log(response);
        dispatch(setAddress(response.data));
        setEditing(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Adding new address:", data);
      setLoading(true);
      try {
        const response = await createAddress(data);
        console.log(response);
        dispatch(setAddress(response.data));
        setEditing(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // This will reset the form with the user's address details when available
  React.useEffect(() => {
    if (address) {
      reset(address);
    }
  }, [address, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-body grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* First Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          className={`input input-bordered text-sm ${
            errors.firstname ? "input-error" : ""
          }`}
          {...register("firstname", {
            required: "First name is required",
          })}
        />
        {errors.firstname && (
          <span className="text-red-500 text-sm">
            {errors.firstname.message}
          </span>
        )}
      </div>

      {/* Last Name (Optional) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="input input-bordered text-sm"
          {...register("lastname")}
        />
      </div>

      {/* City */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">City</span>
        </label>
        <input
          type="text"
          placeholder="Enter your city"
          className={`input input-bordered text-sm ${
            errors.city ? "input-error" : ""
          }`}
          {...register("city", {
            required: "City is required",
          })}
        />
        {errors.city && (
          <span className="text-red-500 text-sm">{errors.city.message}</span>
        )}
      </div>

      {/* Street */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Street</span>
        </label>
        <input
          type="text"
          placeholder="Enter your street"
          className={`input input-bordered text-sm ${
            errors.street ? "input-error" : ""
          }`}
          {...register("street", {
            required: "Street is required",
          })}
        />
        {errors.street && (
          <span className="text-red-500 text-sm">{errors.street.message}</span>
        )}
      </div>

      {/* Mobile No */}
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
              value: /^[0-9]{10}$/,
              message: "Invalid mobile number.",
            },
          })}
        />
        {errors.mobile && (
          <span className="text-red-500 text-sm">{errors.mobile.message}</span>
        )}
      </div>

      {/* Pincode */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Pincode</span>
        </label>
        <input
          type="text"
          placeholder="Enter your pincode"
          className={`input input-bordered text-sm ${
            errors.pincode ? "input-error" : ""
          }`}
          {...register("pincode", {
            required: "Pincode is required",
            pattern: {
              value: /^[1-9][0-9]{5}$/,
              message: "Invalid pincode.",
            },
          })}
        />
        {errors.pincode && (
          <span className="text-red-500 text-sm">{errors.pincode.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="form-control mx-auto w-3/4 md:w-1/2 mt-6 md:col-span-2">
        <button
          type="submit"
          className="btn bg-blue-400 hover:bg-blue-600 text-white font-semibold w-full"
        >
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : address ? (
            "Update Address"
          ) : (
            "Add Address"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
