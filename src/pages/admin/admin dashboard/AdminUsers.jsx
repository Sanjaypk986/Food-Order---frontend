import React, { useEffect, useRef, useState } from "react";
import { adminAllUsers, deleteUser } from "../../../services/adminApi";

const AdminUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [searchFilter, setSearchFilter] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const response = await adminAllUsers();
        setUsers(response.data);
        setSearchFilter(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const handleDeleteUser = async () => {
    try {
      if (selectedUser) {
        const response = await deleteUser(selectedUser);

        setSearchFilter(users.filter((user) => user._id !== selectedUser));
        closePopup();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openDeletePopup = (userId) => {
    setSelectedUser(userId);
    setIsDeletePopupVisible(true);
  };

  const closePopup = () => {
    setIsDeletePopupVisible(false);
    setSelectedUser(null);
  };

  // Search filter
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setQuery(search);

    if (search === "") {
      setSearchFilter(users);
    } else {
      const filtered = users.filter(
        (user) =>
          user._id.toLowerCase().includes(search) ||
          user.name.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search)
      );
      setSearchFilter(filtered);
    }
  };

  return (
    <div className="p-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-4">
        <div className="flex flex-col sm:flex-row gap-5">
          <h1 className="text-2xl font-bold">Users</h1>
          <input
            type="text"
            placeholder="Search Users..."
            className="px-4 py-1 border rounded-xl w-full"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">User Id</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border ">Total Orders</th>
              <th className="px-4 py-2 border ">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {searchFilter.length > 0 ? (
              searchFilter.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100 cursor-pointer">
                  <td className="px-4 py-2 border">{user._id}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border text-center">
                    {user.orders.length}
                  </td>
                  <td className="px-4 py-2 border flex justify-center items-center">
                    <span
                      onClick={() => openDeletePopup(user._id)}
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
            <h2 className="text-lg font-bold mb-4">Delete User</h2>
            <p>
              Are you sure you want to delete user{" "}
              <strong>{selectedUser?.name}</strong>?
            </p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={handleDeleteUser}
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

export default AdminUsers;
