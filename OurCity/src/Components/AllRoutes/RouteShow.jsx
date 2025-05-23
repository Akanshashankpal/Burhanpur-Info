import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Page/Home";
import Explore from "../Page/Explore";
import Pages from "../Page/Pages";
import AboutUs from "../ui/AboutUs";
 

// Explore Details
import Railway from "../Page/ExplorePart/PlaceDetails/Railway";
import ShahiQila from "../Page/ExplorePart/PlaceDetails/ShahiQila";
import DargahHakimi from "../Page/ExplorePart/PlaceDetails/DargahHakimi";

// Categories
import CategorySection from "../Page/CatagoriesPart/CategorySection";
import SubcategoryPage from "../Page/CatagoriesPart/SubcategoryPage";
import Dashboard from '../../AdminPanel/pages/Dashboard';
import Login from '../../AdminPanel/pages/Login'; // Assuming Login component for admin
import AdminDashboard from '../AdimLogin/AdminDashboard/AdminCategory';
import Register from '../ui/Images/Register';
import NewsSection from '../Page/LandigPage/NewsSection';
import SubcategoryDetail from '../Page/CatagoriesPart/SubcategoryDetail ';
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
       
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/registar" element={<Register />} />
            {/* <Route path="/edit-subcategory/:id" element={<EditSubCategory />} /> */}
            <Route path='newssection' element={<NewsSection />} />
            <Route path="/subcategory/:categoryId/subcategory/:subId" element={<SubcategoryDetail />} />
            {/* Admin Panel Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/AdminDashboard' element={<AdminDashboard />} />
            <Route path="/registar" element={<Register />} />
            <Route path="/category/:categoryId/subcategory/:subId" element={<SubcategoryDetail />} />
            <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
            <Route path="/Pages" element={<Pages />} />

            <Route path="/subcategory/:id" element={<SubcategoryDetail />} />



        </Routes>

);


};




export default RouteShow;;
