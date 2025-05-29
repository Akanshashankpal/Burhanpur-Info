import React, { useState } from "react";
import SubCategorySection from "../components/SubCategorySection";
import UserSection from "../components/UserSection";
import CategorySection from "../components/CategorySection";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("category");

  const renderSection = () => {
    switch (activeTab) {
      case "category":
        return <CategorySection />;


        // return <CategorySection />;
      case "subcategory":
        return <SubCategorySection />;
        // return <SubCategorySection />;
      case "users":
        return <UserSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-500 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">Burhanpur</div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            className={`w-full text-left px-4 py-2 rounded hover:bg-purple-700 ${activeTab === "category" && "bg-purple-700"}`}
            onClick={() => setActiveTab("category")}
          >
            Categories
          </button>

          {/* <Link  > */}
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-purple-700 ${activeTab === "subcategory" && "bg-purple-700"}`}
              onClick={() => setActiveTab("subcategory")}
            >
              Subcategories
            </button>

          {/* </Link> */}


          

          {/* </Link> */}

          <button
            className={`w-full text-left px-4 py-2 rounded hover:bg-purple-700 ${activeTab === "users" && "bg-purple-700"}`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-gray-50">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome, Admin</p>
        </header>

        {/* Section */}
        <main className="p-6">{renderSection()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
