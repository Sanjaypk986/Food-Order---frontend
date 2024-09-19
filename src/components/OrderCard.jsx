import React, { useState } from "react";
import { toast } from "react-toastify";

const OrderCard = ({ order, onCancelOrder, onCancelRestaurantOrder }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [openRestaurant, setOpenRestaurant] = useState(null);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleCancelOrder = async () => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        await onCancelOrder(order._id);
      } catch (error) {
        console.log(error);
        toast.error("Failed to cancel the order.");
      }
    }
  };

  const handleCancelRestaurantOrder = async (restaurantId) => {
    if (window.confirm("Are you sure you want to cancel this restaurant's order?")) {
      try {
        await onCancelRestaurantOrder(order._id, restaurantId);
      } catch (error) {
        console.log(error);
        toast.error("Failed to cancel the restaurant order.");
      }
    }
  };

  const toggleRestaurantAccordion = (restaurantId) => {
    setOpenRestaurant(openRestaurant === restaurantId ? null : restaurantId);
  };

  const canCancelOrder = () => {
    return order.status === 'Pending' && order.restaurants.some(r => r.status === 'Pending');
  };

  return (
    <div className="rounded-lg shadow-md mb-4 border border-gray-200">
      {/* Main Accordion Header */}
      <div
        onClick={toggleAccordion}
        className={`collapse-title text-xl font-medium flex justify-between items-center px-4 py-2 cursor-pointer transition-transform ${isAccordionOpen ? 'bg-gray-100' : 'bg-white'}`}
      >
        <div>
          <h2 className="text-sm sm:text-base">Order ID: {order._id}</h2>
          <p className="text-sm text-gray-500">Total: {order.total}₹</p>
        </div>
        {canCancelOrder() && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCancelOrder();
            }}
            className="text-red-500 hover:text-red-700 font-medium text-sm md:text-base"
          >
            Cancel Order
          </button>
        )}
      </div>

      {isAccordionOpen && (
        <div className="px-4 py-2">
          {order.restaurants.map((restaurant) => (
            <div key={restaurant.restaurant._id} className="mb-4 border border-gray-200 rounded-lg">
              {/* Restaurant Accordion Header */}
              <div
                onClick={() => toggleRestaurantAccordion(restaurant.restaurant._id)}
                className={`collapse-title text-lg font-medium flex justify-between items-center px-4 py-2 cursor-pointer transition-transform ${openRestaurant === restaurant.restaurant._id ? 'bg-gray-100' : 'bg-white'}`}
              >
                <div>
                  <h3>{restaurant.restaurant.name}</h3>
                  <p className="text-sm text-gray-500">Total: {restaurant.restaurantTotal}₹</p>
                  <p className={`text-sm ${restaurant.status === 'Cancelled' ? 'text-red-500' : restaurant.status === 'Delivered' ? 'text-green-500' : 'text-yellow-500'}`}>
                    Status: {restaurant.status}
                  </p>
                </div>
                {restaurant.status === 'Pending' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancelRestaurantOrder(restaurant.restaurant._id);
                    }}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>

              {/* Restaurant Items */}
              {openRestaurant === restaurant.restaurant._id && (
                <div className="px-4 py-2">
                  {restaurant.items.map((item) => (
                    <div
                      key={item.food._id}
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
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-lg font-semibold">{item.price * item.quantity}₹</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderCard;
