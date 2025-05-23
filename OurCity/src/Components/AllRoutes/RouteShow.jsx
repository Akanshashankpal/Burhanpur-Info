import { Routes, Route } from "react-router-dom";
import Explore from "../Page/Explore";
import Home from '../Page/Home';
import Pages from '../Page/Pages';
import Railway from '../Page/ExplorePart/PlaceDetails/Railway';
import ShahiQila from '../Page/ExplorePart/PlaceDetails/ShahiQila';
import DargahHakimi from '../Page/ExplorePart/PlaceDetails/DargahHakimi';
import CategorySection from '../Page/CatagoriesPart/CategorySection';;
import Dashboard from '../../AdminPanel/pages/Dashboard';
import Login from '../../AdminPanel/pages/Login'; // Assuming Login component for admin
import SubcategoryPage from '../Page/CatagoriesPart/SubcategoryPage';
import AdminDashboard from '../AdimLogin/AdminDashboard/AdminCategory';
import Register from '../ui/Images/Register';
import NewsSection from '../Page/LandigPage/NewsSection';
import SubcategoryDetail from '../Page/CatagoriesPart/SubcategoryDetail ';
const RouteShow = () => {
    return (

        <div>
            {/* <Router> */}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="/registar" element={<Register />} />
                {/* <Route path="/edit-subcategory/:id" element={<EditSubCategory />} /> */}
                <Route path='newssection' element={<NewsSection />} />
                <Route path="/" element={<Home />} />
                <Route path="/subcategory/:categoryId/subcategory/:subId" element={<SubcategoryDetail />} />
                {/* <Route path="/Login" element={<LoginPage />} /> */}
                <Route path="/Pages" element={<Pages />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/RailwayStaion" element={<Railway />} />
                <Route path="/ShahiQila" element={<ShahiQila />} />
                <Route path="/DargahHakimi" element={<DargahHakimi />} />
                <Route path="/category" element={<CategorySection />} />
                <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
                {/* Admin Panel Routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/AdminDashboard' element={<AdminDashboard />} />
                <Route path="/registar" element={<Register />} />
                <Route path="/category/:categoryId/subcategory/:subId" element={<SubcategoryDetail />} />
                <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
                <Route path="/Pages" element={<Pages />} />

                <Route path="/subcategory/:id" element={<SubcategoryDetail/>} />



            </Routes>
        </div>
    );


};




export default RouteShow;
