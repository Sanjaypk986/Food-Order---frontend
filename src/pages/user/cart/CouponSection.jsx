import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  applyCoupon,
  getAllCoupons,
  removeCoupon,
} from "../../../services/couponApi";
import CouponCard from "../../../components/CouponCard";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../features/cart/cartSlice";

const CouponSection = ({ isCouponApplied, setIsCouponApplied }) => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const { items: cartItems, total: cartTotal } = useSelector(
    (state) => state.cart
  );
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await applyCoupon(data);
      setLoading(true);
      if (response.success) {
        // Only update the total amount with the coupon discount
        dispatch(
          getCart({
            items: cartItems, // Keep existing items
            total: response.data.cart.total, // Update total with coupon discount
          })
        );
        setIsCouponApplied(true);
        setAppliedCoupon(data.code); // Set the applied coupon
        setLoading(false);
        toast.success(response.message || "Coupon applied successfully!");
      } else {
        toast.error(response.message || "Failed to apply coupon.");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(response.message || "An unexpected error occurred.");
    }
  };

  // coupon name set to state
  const handleCoupon = (couponCode) => {
    setValue("code", couponCode);
  };

  // handle remove coupon
  const handleRemove = async () => {
    try {
      const response = await removeCoupon();
      if (response.success) {
        // update the total amount after remove coupon
        dispatch(
          getCart({
            items: cartItems, // Keep existing items
            total: response.data.cart.total, // Update total with remove coupon
          })
        );
        setIsCouponApplied(false);
        setAppliedCoupon(null);
        toast.success(response.message || "Coupon removed successfully!");
      } else {
        toast.error(response.message || "Failed to removecoupon.");
      }
    } catch (error) {
      console.log(error);
      toast.error(response.message || "An unexpected error occurred.");
    }
  };

  return (
    <section className="my-4">
      <h4 className="text-lg md:text-xl font-semibold my-3">Apply Coupon</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          {...register("code")}
          placeholder="Enter coupon code"
          className="input input-bordered w-full text-sm"
        />
        <button
          type="submit"
          className="secondary-bg font-semibold text-white py-2 px-2 rounded"
        >
          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            "Apply Coupon"
          )}
        </button>
      </form>

      {/* Show applied coupon message */}
      {isCouponApplied && (
        <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg shadow-sm mt-3">
          <div className="flex items-center space-x-2">
            <p className="text-green-600 text-xs md:text-sm font-semibold">
              Coupon "{appliedCoupon}" applied successfully!
            </p>
          </div>
          <button
            onClick={handleRemove} // Ensure to add an event handler to remove the coupon
            className="text-red-600 text-xs md:text-sm hover:text-red-800 font-semibold cursor-pointer"
          >
            Remove Coupon
          </button>
        </div>
      )}

      <div className="my-4">
        <CouponCard handleCoupon={handleCoupon} />
      </div>
    </section>
  );
};

export default CouponSection;
