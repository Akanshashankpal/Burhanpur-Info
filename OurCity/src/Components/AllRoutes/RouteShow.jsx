import React from 'react';
import { Routes, Route } from "react-router-dom";

import Explore from "../Page/Explore";
import Home from '../Page/Home';
import LoginPage from '../ui/LoginPage';
import Pages from '../Page/Pages';
import Railway from '../Page/ExplorePart/PlaceDetails/Railway';
import ShahiQila from '../Page/ExplorePart/PlaceDetails/ShahiQila';
import DargahHakimi from '../Page/ExplorePart/PlaceDetails/DargahHakimi';

import CategorySection from '../Page/CatagoriesPart/CategorySection';
import SubcategoryPage from '../Page/CatagoriesPart/SubcategoryPage';
import Dashboard from '../../AdminPanel/pages/Dashboard';
import Login from '../../AdminPanel/pages/Login'; // Assuming Login component for admin

const RouteShow = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/RailwayStaion" element={<Railway />} />
            <Route path="/ShahiQila" element={<ShahiQila />} />
            <Route path="/DargahHakimi" element={<DargahHakimi />} />
            <Route path="/category" element={<CategorySection />} />
            <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />

            {/* Admin Panel Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default RouteShow;
