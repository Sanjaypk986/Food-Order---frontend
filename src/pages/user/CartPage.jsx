import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  removeCartItem,
  updateQuantity,
  viewCartDetails,
} from "../../services/cartApi";
import CartCard from "../../components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  getCart,
  incrementItem,
  removeItem,
} from "../../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems, total: cartTotal } = useSelector(
    (state) => state.cart
  );
  // loader for cartpage
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false); // For actions like remove, increment, decrement

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const response = await viewCartDetails();
        dispatch(
          getCart({ items: response.data.items, total: response.data.total })
        );
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
      const response = await updateQuantity(foodId, quantity);
      dispatch(incrementItem(foodId));
      setActionLoading(false);
    } catch (error) {
      console.error("Error Incrementing quantity:", error);
    }
  };
  const handleDecrementQuantity = async (foodId, quantity) => {
    setActionLoading(true);
    try {
      const response = await updateQuantity(foodId, quantity);
      dispatch(decrementItem(foodId));
      setActionLoading(false);
    } catch (error) {
      console.error("Error decrementing quantity:", error);
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
              <div className="text-right">
                <p className="font-bold">Total: ₹{cartTotal}</p>
              </div>
              <Link
                to="/checkout"
                className="primary-bg font-semibold text-white py-2 px-4 rounded text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </section>
      ) : (
        <section className="my-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-44 h-36 md:h-72 md:w-80"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="empty cart"
            />
            <h4 className="text-lg md:text-xl font-semibold">
              Your cart is empty
            </h4>
            <p className="text-xs md:text-sm text-center text-gray-500">
              You can go to the home page to view more..
            </p>
            <Link
              to="/user"
              className="text-xs md:text-sm text-blue-500 hover:underline"
            >
              Go to Home Page
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default CartPage;
