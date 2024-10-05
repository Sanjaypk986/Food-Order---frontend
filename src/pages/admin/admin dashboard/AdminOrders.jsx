import React, { useEffect, useState } from "react";
import { adminAllOrders } from "../../../services/adminApi";

const AdminOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      setLoading(true);
      try {
        const response = await adminAllOrders();
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Order ID</th>
              <th className="px-4 py-2 border">User</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Total Amount</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100 text-center">
                  <td className="px-4 py-2 border">{order._id}</td>
                  <td className="px-4 py-2 border ">{order.user.name}</td>
                  <td className="px-4 py-2 border">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">₹{order.total}</td>
                  <td
                    className={`px-4 py-2 border font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Confirmed"
                        ? "text-yellow-600"
                        : order.status === "Cancelled"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))
            ) : loading ? (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2 border">
                  <span className="loading loading-bars loading-md"></span>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2 border">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
