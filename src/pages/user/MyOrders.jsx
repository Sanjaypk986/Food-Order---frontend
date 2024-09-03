import React from 'react';

const MyOrders = () => {
  // Assuming we have an empty orders array
  const orders = [];

  return (
    <main>
      <section>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">My Orders</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Empty box illustration"
            className="w-40 h-40 mb-6"
          />
          <p className="text-lg text-gray-600">You have no orders yet!</p>
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto">
          {/* Orders list would be rendered here */}
        </div>
      )}
    </div>
      </section>
    </main>
  );
};

export default MyOrders;
