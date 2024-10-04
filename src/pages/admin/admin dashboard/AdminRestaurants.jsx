import React, { useEffect, useState } from "react";
import {
  adminAllRestaurants,
  changeRestaurantStatus,
  deleteRestaurant,
} from "../../../services/adminApi";

const AdminRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await adminAllRestaurants();
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllRestaurants();
  }, []);

  const handleRestaurantStatus = async (restaurantId, newStatus) => {
    try {
      // Call the API to change the restaurant status
      const response = await changeRestaurantStatus(restaurantId, {
        status: newStatus,
      });
      console.log(response);

      // Update the restaurant status in the local state
      setRestaurants((prevRestaurants) =>
        prevRestaurants.map((restaurant) =>
          restaurant._id === restaurantId
            ? { ...restaurant, status: newStatus }
            : restaurant
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteRestaurant = async () => {
    try {
      if (selectedRestaurant) {
        const response = await deleteRestaurant(selectedRestaurant);
        console.log(response);

        setRestaurants(restaurants.filter((restaurant) => restaurant._id !== selectedRestaurant)); 
        closePopup(); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openDeletePopup = (restaurantId) => {
    setSelectedRestaurant(restaurantId);
    setIsDeletePopupVisible(true);
  };

  const closePopup = () => {
    setIsDeletePopupVisible(false);
    setSelectedRestaurant(null); 
  };

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Restaurant Id</th>
              <th className="px-4 py-2 border">Restaurant Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Total Orders</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => (
                <tr
                  key={restaurant._id}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <td className="px-4 py-2 border">{restaurant._id}</td>
                  <td className="px-4 py-2 border">{restaurant.name}</td>
                  <td className="px-4 py-2 border">{restaurant.email}</td>
                  <td className="px-4 py-2 border text-center">
                    {restaurant.orders.length}
                  </td>
                  <td className="px-4 py-2 border">
                    <select
                      value={restaurant.status}
                      onChange={(e) =>
                        handleRestaurantStatus(restaurant._id, e.target.value)
                      }
                    >
                      <option value="Active" className="text-green-600">
                        Active
                      </option>
                      <option value="Inactive" className="text-red-600">
                        Inactive
                      </option>
                    </select>
                  </td>
                  <td className="px-4 py-2 border">
                    <span onClick={() => openDeletePopup(restaurant._id)} className="py-1 px-2 primary-bg text-sm rounded-lg text-white">Delete</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2 border">
                  No restaurants found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isDeletePopupVisible && (
        <div className="fixed inset-0 px-2 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Delete restaurant</h2>
            <p>
              Are you sure you want to delete restaurant{" "}
              <strong>{selectedRestaurant?.name}</strong>?
            </p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleDeleteRestaurant}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={closePopup}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRestaurants;
