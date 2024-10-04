import React, { useEffect, useState } from "react";
import { adminAllOrders } from "../../../services/adminApi";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await adminAllOrders();
        setOrders(response.data);
      } catch (error) {
        console.log(error);
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
              <th className="px-4 py-2 border">Stautus</th>
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
                  <td className="px-4 py-2 border">{order.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2 border">
                  No orders found
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
