import React from 'react';

const CartCard = ({ item, onRemove }) => {
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
          <button className="px-2 py-1 border rounded">-</button>
          <span>{item.quantity}</span>
          <button className="px-2 py-1 border rounded">+</button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.food._id)}
        className="text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
