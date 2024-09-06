import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { applyCoupon, getAllCoupons } from "../../../services/couponApi";
import CouponCard from "../../../components/CouponCard";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../features/cart/cartSlice";

const CouponSection = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const { items: cartItems, total: cartTotal } = useSelector(
    (state) => state.cart
  );
  const [coupons, setCoupons] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await getAllCoupons();
        setCoupons(response.data.coupons);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoupons();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await applyCoupon(data);

      if (response.success) {
        // Only update the total amount with the coupon discount
        dispatch(
          getCart({
            items: cartItems, // Keep existing items
            total: response.data.cart.total, // Update total with coupon discount
          })
        );
        setAppliedCoupon(data.code); // Set the applied coupon
        toast.success(response.message || "Coupon applied successfully!");
      } else {
        toast.error(response.message || "Failed to apply coupon.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleCoupon = (couponCode) => {
    setValue("code", couponCode);
  };

  return (
    <section className="my-4">
      <h4 className="text-lg md:text-xl font-semibold">Apply Coupon</h4>
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
          Apply Coupon
        </button>
      </form>

      {/* Show applied coupon message */}
      {appliedCoupon && (
        <p className="text-green-600 mt-2">
          Coupon "{appliedCoupon}" applied successfully!
        </p>
      )}

      <div className="my-2">
        <CouponCard handleCoupon={handleCoupon} />
      </div>
    </section>
  );
};

export default CouponSection;
