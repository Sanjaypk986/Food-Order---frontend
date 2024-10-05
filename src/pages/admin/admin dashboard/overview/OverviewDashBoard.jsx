import React, { useEffect, useState } from "react";
import {
  adminAllOrders,
  adminAllRestaurants,
  adminAllUsers,
} from "../../../../services/adminApi";
import { fetchAllFoods } from "../../../../services/foodApi";
import IncomeChart from "./IncomeChart";

const OverviewDashBoard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await adminAllRestaurants();
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUsers = async () => {
      try {
        const response = await adminAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchOrders = async () => {
      try {
        const response = await adminAllOrders();
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchFoodItems = async () => {
      try {
        const response = await fetchAllFoods();
        setFoodItems(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
    fetchUsers();
    fetchOrders();
    fetchFoodItems();
  }, []);

  const overviewArray = [
    {
      title: "Total Orders",
      total: `${orders.length} Orders`,
    },
    {
      title: " Foods",
      total: `${foodItems.length} Items`,
    },
    {
      title: "Users",
      total: `${users.length} Users`,
    },
    {
      title: "Restaurants",
      total: `${restaurants.length} Restaurants`,
    },
  ];

  return (
    <section>
      <div className="w-full md:w-full p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Dashboard <span className="primary-text">Overview</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {overviewArray?.map((overview, index) => (
            <div
              key={index}
              className="card bg-teal-500  text-white h-24 shadow-lg p-4 items-center justify-center"
            >
              <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-white text-center text-base lg:text-lg whitespace-nowrap">
                  {overview.title}
                </h2>
                <p className="text-center">{overview.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <IncomeChart orders={orders} />
    </section>
  );
};

export default OverviewDashBoard;
