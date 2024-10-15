import React, { useState } from "react";
import { useEffect } from "react";
import { fetchAllFoods } from "../../../services/foodApi";

const AdminFoods = () => {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const response = await fetchAllFoods();
        setFoods(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Foods</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Restaurant</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {foods.length > 0 ? (
              foods.map((food) => (
                <tr key={food.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border font-semibold">
                    {food.name}
                  </td>
                  <td className="px-4 py-2 border">{food.restaurant.name}</td>
                  <td className="px-4 py-2 border">
                    {food.category.join(" ,  ")}
                  </td>
                  <td className="px-4 py-2 border font-semibold text-red-500">
                    ₹{food.price}
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

export default AdminFoods;
