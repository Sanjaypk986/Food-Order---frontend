import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <main>
      <section className="px-4 py-7 mx-auto container">
        <div className="flex flex-col lg:flex-row items-center lg:w-3/4 mx-auto justify-center lg:justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Login <span className="primary-text">now!</span>
            </h1>
            <p className="py-6 text-base md:text-md text-justify lg:w-3/4 mx-auto lg:mx-0">
              Order delicious meals effortlessly with our app. Enjoy a fast,
              secure, and seamless experience right from your home.
            </p>
            <p className="text-sm text-blue-500">
              Don't have an account?{" "}
              <Link className="primary-text" to="/signup">
                Signup
              </Link>
            </p>
              <Link className="btn my-3 secondary-bg text-white font-semiboldt" to="/restaurant/login">
              Login as restaurant ?
              </Link>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto lg:mx-0">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
