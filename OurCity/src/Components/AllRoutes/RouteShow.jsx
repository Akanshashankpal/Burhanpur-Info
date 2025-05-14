import React from 'react'
import { Routes, Route } from "react-router-dom";
;
// import Home from "./pages/Home";


// import { LoginPage } from "../ui/LoginPage";
import Explore from "../Page/Explore";
import Home from '../Page/Home';
import LoginPage from '../ui/LoginPage';
import Pages from '../Page/Pages';
import Railway from '../Page/ExplorePart/PlaceDetails/Railway';
import ShahiQila from '../Page/ExplorePart/PlaceDetails/ShahiQila';
import DargahHakimi from '../Page/ExplorePart/PlaceDetails/DargahHakimi';
import PhotoPage from '../Page/CatagoriesPart/PhotoPage';
import HopitalPage from '../Page/CatagoriesPart/HopitalPage';
import EntertenmentPage from '../Page/CatagoriesPart/EntertenmentPage';
import FoodPage from '../Page/CatagoriesPart/FoodPage';
import ITPage from '../Page/CatagoriesPart/ITPage';
import CategorySection from '../Page/CatagoriesPart/CategorySection';
import SubcategoryPage from '../Page/CatagoriesPart/SubcategoryPage';
const RouteShow = () => {
    return (
        <div>
            {/* <Router> */}
                <Routes>
                    <Route path="/" element={<CategorySection/>} />
                    <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />

                    <Route path="/Login" element={<LoginPage/>} />
                    <Route path="/Pages" element={<Pages/>} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path='/RailwayStaion' element={<Railway/>}  />
                    <Route path='/ShahiQila' element={<ShahiQila/>}  />
                    <Route path='/DargahHakimi' element={<DargahHakimi/>} />
                    <Route   path='/photo' element={<PhotoPage/>}   />
                    <Route path='/hospital' element={<HopitalPage/>} />
                    <Route path='/entertenment' element={<EntertenmentPage/>} />
                    <Route path='/food' element={<FoodPage/>} />
                    <Route path='/IT' element={<ITPage/>} />
                
                </Routes>
            {/* </Router> */}
        </div>
    )
}

export default RouteShow
