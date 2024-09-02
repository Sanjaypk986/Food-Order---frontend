import React, { useEffect } from "react";
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

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await viewCartDetails();
        dispatch(
          getCart({ items: response.data.items, total: response.data.total })
        );
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, [dispatch]);

  const handleRemoveItem = async (foodId) => {
    try {
      await removeCartItem(foodId);
      dispatch(removeItem(foodId));
      // Refetch cart after remove
      const response = await viewCartDetails();
      dispatch(
        getCart({ items: response.data.items, total: response.data.total })
      );
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  const handleIncrementQuantity = async (foodId, quantity) => {
    try {
      const response = await updateQuantity(foodId, quantity);

      dispatch(incrementItem(foodId));
    } catch (error) {
      console.error("Error Incrementing quantity:", error);
    }
  };
  const handleDecrementQuantity = async (foodId, quantity) => {
    try {
      const response = await updateQuantity(foodId, quantity);

      dispatch(decrementItem(foodId));
      console.log(response);
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  return (
    <main className="container mx-auto px-2">
      {cartItems.length > 0 ? (
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
          <div className="flex flex-col gap-4 md:w-3/4 mx-auto">
            {cartItems.map((item) => (
              <CartCard
                key={item._id}
                item={item}
                onRemove={handleRemoveItem}
                onIncrement={handleIncrementQuantity}
                onDecrement={handleDecrementQuantity}
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
