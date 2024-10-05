import React, { useState } from "react";
import DashBoardMenu from "./DashBoardMenu";
import OverviewDashBoard from "./overview/OverviewDashBoard";
import AdminOrders from "./AdminOrders";
import AdminFoods from "./AdminFoods";
import AdminUsers from "./AdminUsers";
import AdminRestaurants from "./AdminRestaurants";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // condition to show tab view
  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewDashBoard />;
      case "orders":
        return <AdminOrders />;
      case "foods":
        return <AdminFoods />;
      case "users":
        return <AdminUsers />;
      case "restaurants":
        return <AdminRestaurants />;
      default:
        return <OverviewDashBoard />;
    }
  };
  return (
    <main className="min-h-screen flex flex-col md:flex-row mt-2">
      <DashBoardMenu onSelectTab={setActiveTab} />
      {renderActiveTab()}
    </main>
  );
};

export default AdminDashboard;
