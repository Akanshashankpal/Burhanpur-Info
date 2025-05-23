import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar";
import About from "../ui/AboutUs";
import Explore from "../Page/Explore";
import Home from "../Page/Home";
import Pages from "../Page/Pages";
import Railway from "../Page/ExplorePart/PlaceDetails/Railway";
import ShahiQila from "../Page/ExplorePart/PlaceDetails/ShahiQila";
import DargahHakimi from "../Page/ExplorePart/PlaceDetails/DargahHakimi";
import CategorySection from "../Page/CatagoriesPart/CategorySection";
import SubcategoryPage from "../Page/CatagoriesPart/SubcategoryPage";

const RouteShow = () => {
  const location = useLocation();

  const showNavbar = true;

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} /> 
        <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/railway-station" element={<Railway />} /> {/* fixed spelling & case */}
        <Route path="/shahi-qila" element={<ShahiQila />} /> {/* better kebab-case */}
        <Route path="/dargah-hakimi" element={<DargahHakimi />} /> {/* better kebab-case */}
        <Route path="/category" element={<CategorySection />} /> {/* added this route */}
      </Routes>
    </div>
  );
};

export default RouteShow;
