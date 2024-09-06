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

const CartPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems, total: cartTotal } = useSelector(
    (state) => state.cart
  );
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false); // For actions like remove, increment, decrement
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const response = await viewCartDetails();
        console.log(response.data.items);
        dispatch(
          getCart({ items: response.data.items, total: response.data.total })
        );
        setAppliedCoupon(response.data.appliedCoupon); // Update applied coupon
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

  const handleRemoveCoupon = async () => {
    try {
      // Call your API to remove the coupon from the cart
      const response = await removeCoupon(); 

      
      dispatch(getCart({ items: response.data.items, total: response.data.total }));
      setAppliedCoupon(null);
      toast.success("Coupon removed successfully!");
    } catch (error) {
      console.error("Error removing coupon:", error);
      toast.error("Failed to remove coupon.");
    }
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-96">
        <span className="loading loading-ring loading-lg"></span>
        <p className="ml-4">Cart loading...</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-2">
      {cartItems.length > 0 ? (
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
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
              <CouponSection />

              {/* Remove coupon button */}
              {appliedCoupon && (
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  className="secondary-bg font-semibold text-white py-2 px-4 rounded mt-4"
                >
                  Remove Applied Coupon
                </button>
              )}

              {/* total amount section */}
              <div className="text-right">
                <p className="font-bold">Total: ₹{cartTotal}</p>
              </div>
              <Link
                to="/user/cart/check-out"
                className="primary-bg font-semibold text-white py-2 px-4 rounded text-center"
              >
                Proceed to Checkout
              </Link>
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
