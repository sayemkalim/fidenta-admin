import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-48 p-4 flex flex-col">
      <Link to="/dashboard/users" className="text-white no-underline mb-4">
        🤵 Customer List
      </Link>
      <Link to="/dashboard/sellers" className="text-white no-underline mb-4">
        🏪 Seller List
      </Link>
      <Link to="/dashboard/products" className="text-white no-underline mb-4">
        📦 All Products
      </Link>
      <Link to="/dashboard/wages" className="text-white no-underline mb-4">
        💰 Wages
      </Link>
      <Link to="/dashboard/thumbnail" className="text-white no-underline mb-4">
      📰 Add Thumbnail
      </Link>
      <Link to="/dashboard/banner" className="text-white no-underline mb-4">
      📰 Add Banner
      </Link>
      <Link to="/dashboard/extra" className="text-white no-underline mb-4">
        ➕ Extra
      </Link>
    </div>
  );
}

export default Sidebar;
