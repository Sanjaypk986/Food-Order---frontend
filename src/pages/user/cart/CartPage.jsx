import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  removeCartItem,
  updateQuantity,
  viewCartDetails,
} from "../../../services/cartApi";
import CartCard from "../../../components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  getCart,
  incrementItem,
  removeItem,
} from "../../../features/cart/cartSlice";
import CouponSection from "./CouponSection";
import AddressPage from "./AddressPage";
import EmptyCart from "./EmptyCart";
import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../../../config/axiosInstance";
import toast from "react-hot-toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address.data);

  const { items: cartItems, total: cartTotal } = useSelector(
    (state) => state.cart
  );

  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false); // For remove, increment, decrement
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const response = await viewCartDetails();
        dispatch(
          getCart({ items: response.data.items, total: response.data.total })
        );
        setAppliedCoupon(response.data.couponApplied); // Update applied coupon
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };
    fetchCart();
  }, [dispatch]);

  const handleRemoveItem = async (foodId) => {
    setActionLoading(true);
    try {
      await removeCartItem(foodId);
      dispatch(removeItem(foodId));
      // Refetch cart after remove
      const response = await viewCartDetails();

      dispatch(
        getCart({ items: response.data.items, total: response.data.total })
      );
      setActionLoading(false);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleIncrementQuantity = async (foodId, quantity) => {
    setActionLoading(true);
    try {
      await updateQuantity(foodId, quantity);
      dispatch(incrementItem(foodId));
      setActionLoading(false);
    } catch (error) {
      console.error("Error Incrementing quantity:", error);
    }
  };

  const handleDecrementQuantity = async (foodId, quantity) => {
    setActionLoading(true);
    try {
      await updateQuantity(foodId, quantity);
      dispatch(decrementItem(foodId));
      setActionLoading(false);
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  const makePayment = async () => {
    try {
      if (cartTotal < 100) {
        toast.error(
          "Your cart total must be at least ₹100 to proceed with the order."
        );
      }else{
        
      // created instance with stripe
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_publishable_key
      );
      // backend request
      const response = await axiosInstance.post(
        "/payment/create-checkout-session",
        {
          cartItems: cartItems,
          cartTotal: cartTotal,
        }
      );

      const sessionId = response?.data?.sessionId;
      // Redirect to Stripe payment page
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
      }

    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
        <p className="ml-4">Cart loading...</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-2 min-h-screen">
      {cartItems.length > 0 ? (
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center mb-6 underline">Your Cart</h2>
          {actionLoading ? (
            <div className="flex justify-center mb-4">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:w-3/4 mx-auto">
              {cartItems?.map((item) => (
                <CartCard
                  key={item._id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onIncrement={handleIncrementQuantity}
                  onDecrement={handleDecrementQuantity}
                  valueChange={actionLoading}
                />
              ))}

              {/* address section */}
              <AddressPage />

              {/* coupon section  */}
              <CouponSection
                isCouponApplied={appliedCoupon}
                setIsCouponApplied={setAppliedCoupon}
              />

              {/* total amount section */}
              <div className="my-4 border border-gray-300 p-4 rounded-md shadow-md">
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                  Bill Details
                </h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Discount:</p>
                  <p
                    className={`font-bold ${
                      appliedCoupon ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {appliedCoupon ? "Applied" : "Nil"}
                  </p>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Delivery Charge:</p>
                  <p className="font-bold">Free</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm">Total Amount:</p>
                  <p className="font-bold text-xl">₹ {cartTotal}</p>
                </div>
                <div className="border-t w-full px-2 pt-2 flex justify-start items-center">
              <p className="primary-text font-semibold  flex items-center gap-3 text-xs ">
                <i className="text-base fa-solid fa-truck"></i>
                Special Opening Offer: Free Delivery for All Orders!
              </p>
            </div>
              </div>

              {address ? (
                <button
                  onClick={makePayment}
                  className="primary-bg font-semibold text-white py-2 px-4 rounded text-center"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <span className="text-red-600 text-center">
                  Add address to continue
                </span>
              )}
            </div>
          )}
        </section>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
};

export default CartPage;
