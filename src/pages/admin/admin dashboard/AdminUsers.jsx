import React, { useEffect, useState } from "react";
import { adminAllUsers, deleteUser } from "../../../services/adminApi";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await adminAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllUsers();
  }, []);

  const handleDeleteUser = async () => {
    try {
      if (selectedUser) {
        const response = await deleteUser(selectedUser);
        console.log(response);

        setUsers(users.filter((user) => user._id !== selectedUser));
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

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
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
            {users.length > 0 ? (
              users.map((user) => (
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
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2 border">
                  No users found
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
