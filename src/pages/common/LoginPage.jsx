import React from "react";
import LoginForm from "../../components/forms/loginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main>
      <section className="px-1 sm:px-2 py-7 my-2">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row lg:w-3/4">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Login <span className="primary-text">now!</span>
              </h1>
              <p className="py-6 text-base md:text-md text-justify  lg:w-3/4">
                Order delicious meals effortlessly with our app. Enjoy a fast,
                secure, and seamless experience right from your home.
              </p>

              <p className="text-sm text-blue-500">
                Don't have an account?{" "}
                <Link className="primary-text " to={"/signup"}>
                  Signup
                </Link>
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
