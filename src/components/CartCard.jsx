import React from "react";

const CartCard = ({ item, onRemove, onIncrement, onDecrement }) => {
  const handleIncrement = () => {
    const newQuantity = item.quantity + 1;
    onIncrement(item.food._id, newQuantity);
  };
  const handleDecrement = () => {
    const newQuantity = item.quantity - 1;
    onDecrement(item.food._id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between border-b pb-4">
      <img
        src={item.food.image}
        alt={item.food.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1 ml-4">
        <h4 className="font-semibold">{item.food.name}</h4>
        <p className="text-sm text-gray-500">
          ₹{item.food.price} x {item.quantity}
        </p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => handleDecrement(item.food._id, item.quantity)}
            className="px-2 py-1 border rounded"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item.food._id, item.quantity)}
            className="px-2 py-1 border rounded"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.food._id)}
        className="primary-text hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
