import React, { useEffect, useRef, useState } from "react";
import { adminAllOrders } from "../../../services/adminApi";

const AdminOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [query, setQuery] = useState([]);
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  useEffect(() => {
    const fetchAllOrders = async () => {
      setLoading(true);
      try {
        const response = await adminAllOrders();
        setOrders(response.data);
        setSearchFilter(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchAllOrders();
  }, []);

  //   search filter
  const handleSearch = async (e) => {
    setLoading(true);
    try {
      const search = e.target.value.toLowerCase(); //get search value
      setQuery(search);
      if (search === "") {
        setSearchFilter(orders);
      } else {
      const filtered = orders.filter(
        (order) =>
          order._id.toLowerCase().includes(query) || //order id check using query
          order.user.name.toLowerCase().includes(query) ||
          order.status.toLowerCase().includes(query)
      );
      setSearchFilter(filtered); 
    }// Update the filtered orders
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //   date filtering
  const handleDateFilter = async () => {
    setLoading(true);
    try {
      // get data from useref
      const fromDate = fromDateRef.current.value;
      const toDate = toDateRef.current.value;

      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);

      const filtered = orders.filter((order) => {
        //filter
        const orderDate = new Date(order.createdAt);
        return orderDate >= startDate && orderDate <= endDate; //conditon for date
      });
      setSearchFilter(filtered);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // Reset date filter
  const handleReset = () => {
    fromDateRef.current.value = "";
    toDateRef.current.value = "";
    setSearchFilter(orders);
  };

  return (
    <div className="p-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-4">
        <div className="flex flex-col sm:flex-row gap-5">
          <h1 className="text-2xl font-bold">Orders</h1>
          <input
            type="text"
            placeholder="Search orders..."
            className="px-4 py-1 border rounded-xl w-full"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 my-4">
          <div className="flex flex-col sm:flex-row  justify-center items-center gap-2 md:gap-5">
            <div className="flex items-center gap-2">
              <label htmlFor="from" className="font-medium text-gray-700">
                From
              </label>
              <input
                ref={fromDateRef}
                onChange={handleDateFilter}
                type="date"
                id="from"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="to" className="font-medium text-gray-700">
                To
              </label>
              <input
                ref={toDateRef}
                onChange={handleDateFilter}
                type="date"
                id="to"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Reset
          </button>
        </div>
      </div>

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
            {searchFilter?.length > 0 ? (
              searchFilter?.map((order) => (
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
