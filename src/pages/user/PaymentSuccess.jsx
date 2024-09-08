import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addToOrder } from '../../services/orderApi';
import { CheckCircle } from 'lucide-react'; // Import Lucide Icon

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreateOrder = async () => {
      try {
        const response = await addToOrder();
        navigate('/user/my-orders');
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreateOrder();
  }, []);

  return (
    <main className="flex items-center container mx-auto justify-center px-auto min-h-96">
      <section className="food-card mx-2 shadow-lg rounded-lg p-8 max-w-lg mx-auto text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Payment Successful!
        </h2>
        <p className="text-sm mb-6">
          Your payment has been successfully processed.
        </p>
      </section>
    </main>
  );
};

export default PaymentSuccess;
