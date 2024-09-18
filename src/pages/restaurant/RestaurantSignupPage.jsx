import React from "react";
import { Link } from "react-router-dom";
import RestaurantSignupForm from "../../components/forms/RestaurantSignupForm";

const RestaurantSignupPage = () => {
  return (
    <main>
      <section className="px-1 sm:px-2 py-7 my-2">
        <div className="hero">
          <div className="hero-content flex-col w-full lg:w-3/4 mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Signup <span className="primary-text">now!</span>
              </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-2xl mx-auto shadow-2xl p-4">
              <RestaurantSignupForm/>
              <p className="text-sm text-center my-2 text-blue-500">
                Already have an account?{" "}
                <Link className="primary-text" to={"/restaurant/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantSignupPage;
