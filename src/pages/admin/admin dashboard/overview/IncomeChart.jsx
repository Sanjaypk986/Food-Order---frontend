import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { getTotalIncome } from '../../../../services/adminApi';

const IncomeChart = ({ orders }) => {
  const [income, setIncome] = useState(0);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await getTotalIncome();
        setIncome(response.data); 
      } catch (error) {
        console.error('Error fetching total income:', error);
      }
    };
    fetchIncome();
  }, []);

  const chartData = [
    { name: 'Today', orders: orders.filter(order => new Date(order.createdAt).toDateString() === new Date().toDateString()).length },
    { name: 'Last Week', orders: orders.filter(order => {
        const today = new Date();
        const orderDate = new Date(order.createdAt);
        return orderDate > new Date(today.setDate(today.getDate() - 7));
      }).length 
    },
    { name: 'Last Month', orders: orders.filter(order => {
        const today = new Date();
        const orderDate = new Date(order.createdAt);
        return orderDate > new Date(today.setMonth(today.getMonth() - 1));
      }).length 
    }
  ];

  return (
    <div className='my-3 p-4 md:p-6'>
      <h2 className='text-xl md:text-2xl font-bold mb-6'>Total Income</h2>
      <div className='text-2xl font-semibold text-green-600 mb-6'>₹{income}</div>

      {/* Orders Chart */}
      <h2 className='text-lg md:text-xl font-bold mb-4'>Orders Overview</h2>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default IncomeChart;
