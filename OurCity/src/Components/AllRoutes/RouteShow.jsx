import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Page/Home";
import Explore from "../Page/Explore";
import Pages from "../Page/Pages";
import AboutUs from "../ui/AboutUs";
import LoginPage from "../ui/LoginPage";

// Explore Details
import Railway from "../Page/ExplorePart/PlaceDetails/Railway";
import ShahiQila from "../Page/ExplorePart/PlaceDetails/ShahiQila";
import DargahHakimi from "../Page/ExplorePart/PlaceDetails/DargahHakimi";

// Categories
import CategorySection from "../Page/CatagoriesPart/CategorySection";
import SubcategoryPage from "../Page/CatagoriesPart/SubcategoryPage";

const RouteShow = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-50 text-gray-800">
            <Home />
          </div>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/about" element={<AboutUs />} />

      {/* Explore */}
      <Route path="/explore" element={<Explore />} />
      <Route path="/railway-station" element={<Railway />} />
      <Route path="/shahi-qila" element={<ShahiQila />} />
      <Route path="/dargah-hakimi" element={<DargahHakimi />} />

      {/* Categories */}
      <Route path="/explore/categories" element={<CategorySection />} />
      <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />

      {/* 404 Fallback */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-screen text-2xl font-semibold">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default RouteShow;
