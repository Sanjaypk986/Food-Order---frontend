import React from "react";

const SignupPage = () => {

    
  return (
    <main>
      <section className="px-1 sm:px-2 py-7 my-2">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row lg:w-3/4">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold">Login <span className="primary-text">now!</span></h1>
              <p className="py-6 lg:w-3/4">
              Order delicious meals effortlessly with our app. Enjoy a fast, secure, and seamless experience right from your home
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn primary-bg text-white font-semibold">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
