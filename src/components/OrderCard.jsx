import React, { useState } from "react";

const OrderCard = ({ orders, onCancel }) => {
    
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        onCancel(orders._id);
      } catch (error) {
        console.error("Failed to cancel order:", error);
      }
    }
  };

  return (
    <div className="collapse food-card  rounded-lg shadow-md mb-4">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium flex justify-between items-center px-4 py-2">
        <div>
          <h2>{orders.restaurant.name}</h2>
          <p className="text-sm text-gray-500">{orders.restaurant.location}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{orders.total}₹</p>
        </div>
      </div>
      <div className="collapse-content px-4 py-2">
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
                  {orders.restaurant.name}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <p className="text-lg font-semibold">{item.price}₹</p>
              <p
                className={`text-sm font-semibold ${
                  orders.status === "Delivered"
                    ? "text-green-500"
                    : "text-orange-500"
                }`}
              >
                {orders.status}
              </p>
              {orders.status === "Pending" && (
                <button
                  onClick={handleCancel}
                  className="mt-2 text-red-500 hover:text-red-700 font-medium"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
