import React, { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard";
import myOrder from '../../assets/my-order.png'
import { Link } from "react-router-dom";
import { cancelOrder, cancelRestaurantOrder, getMyOrder } from "../../services/orderApi";
import { useDispatch, useSelector } from "react-redux";
import { cancelItem, getOrders } from "../../features/order/ordersSlice";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  useEffect(() => {
    const fetchMyOrders = async () => {
      setLoading(true);
      try {
        const response = await getMyOrder();
        dispatch(getOrders(response));
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };
    fetchMyOrders();
  }, [dispatch]);

  const handleCancelOrder = async (orderId) => {
    setActionLoading(true);
    try {
      await cancelOrder(orderId);
      dispatch(cancelItem({ orderId }));
      toast.success("Order canceled successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel the order.");
    } finally {
      setActionLoading(false);
    }
  };
  

  const handleCancelRestaurantOrder = async (orderId, restaurantId) => {
    setActionLoading(true);
    try {
      await cancelRestaurantOrder(orderId, restaurantId);
      dispatch(cancelItem({ orderId, restaurantId }));
      toast.success("Restaurant order canceled successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel the restaurant order.");
    } finally {
      setActionLoading(false);
    }
  };
  

  return (
    <main className="container mx-auto px-2 min-h-screen">
      {loading ? (
        <div className="text-center my-8">
          <p>Loading orders...</p>
        </div>
      ) : orders.length === 0 ? (
        <section className="my-8 text-center p-1">
          <h4 className="text-lg md:text-xl font-semibold mb-2">No Orders</h4>
          <p className="text-xs md:text-sm text-gray-400 mb-4">
            Your orders with Spicezy will be listed here.
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-44 h-36 md:w-80 md:h-72"
              src={myOrder}
              alt="No Orders"
            />
            <p className="text-xs md:text-sm text-gray-400 mb-4">
              Go ahead and find some awesome foods..
            </p>
            <Link
              to="/user"
              className="text-xs md:text-sm text-blue-400 hover:underline"
            >
              Go to Home Page
            </Link>
          </div>
        </section>
      ) : (
        <>
          <h2 className="font-semibold text-center text-2xl my-5 underline">
            My Orders
          </h2>
          <section className="my-8 p-2 md:w-3/4 lg:w-1/2 mx-auto">
            {orders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
                onCancelOrder={handleCancelOrder}
                onCancelRestaurantOrder={handleCancelRestaurantOrder}
              />
            ))}
          </section>
        </>
      )}
      {actionLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-lg">Processing cancellation...</div>
        </div>
      )}
    </main>
  );
};

export default MyOrders;
