import React, { useState } from "react";

const OrderCard = ({ orders, onCancel }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleCancel = (e) => {
    // Prevent the accordion toggle when clicking the cancel button
    e.stopPropagation();

    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        onCancel(orders._id);
      } catch (error) {
        console.error("Failed to cancel order:", error);
      }
    }
  };

  // Calculate total for all items from this restaurant
  const totalForRestaurant = orders.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-lg shadow-md mb-4">
      <div
        onClick={toggleAccordion}
        className="collapse-title text-xl font-medium flex justify-between items-center px-4 py-2 cursor-pointer"
      >
        <div>
          <h2>{orders?.restaurant?.name}</h2>
          <p className="text-sm text-gray-500">{orders.restaurant?.location}</p>
        </div>
        <div className="text-right">
          {/* Display total for all items in the header */}
          <p className="text-lg font-semibold">{orders.total}₹</p>
          <p
            className={`text-sm font-semibold ${
              orders.status === "Delivered" ? "text-green-500" : "text-orange-500"
            }`}
          >
            {orders.status}
          </p>
        </div>
      </div>

      {/* Cancel button outside the clickable header */}
      {orders.status === "Pending" && (
        <button
          onClick={handleCancel}
          className="mt-2 text-red-500 hover:text-red-700 font-medium px-4"
        >
          Cancel
        </button>
      )}

      {isAccordionOpen && (
        <div className="px-4 py-2">
          {orders.items.map((item) => {
            const itemTotal = item.price * item.quantity; // Calculate total for each item
            return (
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
                    <p className="text-sm text-gray-500">{orders.restaurant.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  {/* Display total for each product */}
                  <p className="text-lg font-semibold">{itemTotal}₹</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrderCard;
