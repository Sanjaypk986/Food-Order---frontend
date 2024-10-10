import React, { useState } from "react";

const RestaurantOrderCard = ({ orders, onStatusChange }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(orders.status);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    if (
      newStatus &&
      window.confirm(
        `Are you sure you want to mark this order as ${newStatus}?`
      )
    ) {
      onStatusChange(orders.orderId, orders._id, newStatus);
    } else {
      setSelectedStatus(orders.status);
    }
  };
  // Calculate total for all items from this restaurant
  const totalForRestaurant = Array.isArray(orders.items)
    ? orders.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    : 0;

  return (
    <div className="rounded-lg food-card shadow-md mb-4">
      <div
        onClick={toggleAccordion}
        className="collapse-title text-xl font-medium flex justify-between items-center px-4 py-2 cursor-pointer"
      >
        <div>
          <h5 className="text-xs sm:text-xl">Order: {orders._id}</h5>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{totalForRestaurant}₹</p>
          <p
            className={`text-xs sm:text-sm font-semibold  ${
              orders.status === "Delivered"
                ? "text-green-500"
                : "text-orange-500"
            }`}
          >
            {orders.status}
          </p>
        </div>
      </div>

      {orders.status !== "Cancelled" && (
        <div className="flex justify-between items-center gap-2 px-1">
          <div className="mt-2">
            <select
              value={orders.status}
              onChange={handleStatusChange}
              className="text-primary font-medium px-4 w-32 my-1 mx-1 text-sm md:text-base rounded-md "
            >
              <option value="">Select</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="mt-2">
            <button
              className="font-medium px-4 w-28 my-1  mx-1 text-sm md:text-base rounded-md bg-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Address
            </button>
           {
            orders &&  <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-base">
                {orders.user.address.firstname} {orders.user.address.lastname}
              </h3>
              <div className="py-4">
                <div className="flex items-center justify-center gap-3 text-xs sm:text-base">
                  <p>
                    <span className="font-semibold">City : </span>
                    {orders.user.address.city}
                  </p>
                  <p>
                    <span className="font-semibold">Mobile :</span>{" "}
                    {orders.user.address.mobile}
                  </p>
                </div>
                <div className="flex flex-col items-center my-2 justify-center gap-3 text-xs sm:text-base">
                  <p>
                    <span className="font-semibold">Street : </span>
                    {orders.user.address.street}
                  </p>
                  <p>
                    <span className="font-semibold">Pincode :</span>{" "}
                    {orders.user.address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </dialog>
           }
          </div>
        </div>
      )}

      {isAccordionOpen && (
        <div className="px-4 py-2">
          {orders.items.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.food.image}
                  alt={item.food.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.food.name}</h4>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <p className="text-lg font-semibold">{item.price}₹</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantOrderCard;
