import React, { useState } from "react";
import RestaurantRequestReset from "../../components/restaurant/RestaurantRequestReset";
import { RestaurantRequestPasswordReset } from "./../../services/restaurantApi";

const RestaurantForgotPassword = () => {
  const [resetRequested, setResetRequested] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await RestaurantRequestPasswordReset(data);
      console.log(response);
      setResetRequested(true);
      setLoading(false);
    } catch (error) {
      console.error("Error in forgot password:", error);
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-96">
      <h2 className="font-semibold text-center text-2xl my-5 py-3 underline">
        Forgot <span>Password</span>
      </h2>
      <section className="container mx-auto flex flex-col justify-center items-center">
        <div className="w-full about-card md:w-3/4 flex justify-center items-center p-8 ">
          {resetRequested ? (
            <div className="text-center">
              <p className="text-sm text-green-600">
                Password reset request successful! Please check your email.
              </p>
            </div>
          ) : (
            <RestaurantRequestReset onSubmit={onSubmit} loading={loading} />
          )}
        </div>
      </section>
    </main>
  );
};

export default RestaurantForgotPassword;
