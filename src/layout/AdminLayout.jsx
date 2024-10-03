import React from "react";
import { Outlet } from "react-router-dom";
import useSmoothScroll from "../hooks/scrollView";
import useScrollToTop from "../hooks/useScrollTop";
import AdminHeader from "../components/admin/AdminHeader";

const Adminlayout = () => {
  useScrollToTop();
  useSmoothScroll();
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Spicezy
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Adminlayout;
