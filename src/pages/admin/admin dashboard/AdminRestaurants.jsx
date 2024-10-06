import React, { useEffect, useState } from "react";
import {
  adminAllRestaurants,
  changeRestaurantStatus,
  deleteRestaurant,
} from "../../../services/adminApi";

const AdminRestaurants = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [searchFilter, setSearchFilter] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      setLoading(true);
      try {
        const response = await adminAllRestaurants();
        setRestaurants(response.data);
        setSearchFilter(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchAllRestaurants();
  }, []);

  // Search filter
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setQuery(search);

    if (search === "") {
      setSearchFilter(restaurants);
    } else {
      const filtered = restaurants.filter(
        (restaurant) =>
          restaurant._id.toLowerCase().includes(query) ||
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.email.toLowerCase().includes(query)
      );
      setSearchFilter(filtered);
    }
  };

  //   sort by active or inactive
  const handleSort = (e) => {
    try {
      const sort = e.target.value;

      const filtered = restaurants.filter((restaurant) =>
        restaurant.status.includes(sort)
      );
      setSearchFilter(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRestaurantStatus = async (restaurantId, newStatus) => {
    try {
      const response = await changeRestaurantStatus(restaurantId, {
        status: newStatus,
      });
      console.log(response);

      setRestaurants((prevRestaurants) =>
        prevRestaurants.map((restaurant) =>
          restaurant._id === restaurantId
            ? { ...restaurant, status: newStatus }
            : restaurant
        )
      );
      setSearchFilter((prevRestaurants) =>
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
        setSearchFilter(
          restaurants.filter(
            (restaurant) => restaurant._id !== selectedRestaurant
          )
        );
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-4">
        <div className="flex flex-col sm:flex-row gap-5">
          <h1 className="text-2xl font-bold">Restaurants</h1>
          <input
            type="text"
            placeholder="Search Restaurants..."
            className="px-4 py-1 border rounded-xl w-full"
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center justify-center  gap-5">
          <label htmlFor="sort">Sort</label>
          <select onChange={handleSort} className="border px-4 py-1 rounded-lg">
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
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
            {searchFilter.length > 0 ? (
              searchFilter.map((restaurant) => (
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
                    <span
                      onClick={() => openDeletePopup(restaurant._id)}
                      className="py-1 px-2 primary-bg text-sm rounded-lg text-white"
                    >
                      Delete
                    </span>
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
