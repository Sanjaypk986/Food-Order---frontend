import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelItem,
  changeOrderStatus,
  getOrders,
} from "../../features/order/ordersSlice";
import myOrder from "../../assets/my-order.png";
import { Link } from "react-router-dom";
import { ConfirmOrder, RestaurantOrders } from "../../services/restaurantApi";
import RestaurantOrderCard from "../../components/restaurant/RestaurantOrderCard";

const OrdersPage = () => {
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  useEffect(() => {
    const fetchMyOrders = async () => {
      setLoading(true);
      try {
        const response = await RestaurantOrders();

        dispatch(getOrders(response.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchMyOrders();
  }, [dispatch]);

  const handleOrderStatus = async (orderId, restaurantOrderId, status) => {
    setActionLoading(true);
    try {
      const response = await ConfirmOrder(orderId, status); // Pass the new status to backend
      dispatch(changeOrderStatus({ restaurantOrderId, status }));
    } catch (error) {
      console.log(error);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-2">
      {loading ? (
        <div className="text-center my-8">
          <p>Loading orders...</p>
        </div>
      ) : orders?.length === 0 ? (
        <section className="my-8 text-center p-1">
          <h4 className="text-lg md:text-xl font-semibold mb-2">No Orders</h4>
          <p className="text-xs md:text-sm text-gray-400 mb-4">
            Your orders will be listed here.
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-44 h-36 md:w-80 md:h-72"
              src={myOrder}
              alt="No Orders"
            />
            <p className="text-xs md:text-sm text-gray-400 mb-4">
              We will notify when the order placed
            </p>
            <Link
              to="/restaurants"
              className="text-xs md:text-sm text-blue-400 hover:underline"
            >
              Go to Home Page
            </Link>
          </div>
        </section>
      ) : (
        <section className="my-8 lg:w-3/4 mx-auto px-1">
          <h2 className="font-semibold text-center text-2xl my-5 underline">
            Orders
          </h2>
          <p className="mb-6">
            All your placed orders will appear here. Manage and track each order
            efficiently..
          </p>
          <div className="my-8 p-2 ">
            {orders?.map((order) => (
              <RestaurantOrderCard
                key={order._id}
                orders={order}
                onStatusChange={handleOrderStatus}
              />
            ))}
          </div>
        </section>
      )}
      {actionLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-lg">Processing cancellation...</div>
        </div>
      )}
    </main>
  );
};

export default OrdersPage;
