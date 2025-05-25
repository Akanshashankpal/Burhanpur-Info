import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar";
import About from "../ui/AboutUs";
import Explore from "../Page/Explore";
import Home from "../Page/Home";
// import LoginPage from '../ui/LoginPage';
import Pages from "../Page/Pages";
import Railway from "../Page/ExplorePart/PlaceDetails/Railway";
import ShahiQila from "../Page/ExplorePart/PlaceDetails/ShahiQila";
import DargahHakimi from "../Page/ExplorePart/PlaceDetails/DargahHakimi";

import CategorySection from "../Page/CatagoriesPart/CategorySection";
import SubcategoryPage from "../Page/CatagoriesPart/SubcategoryPage";
import Dashboard from "../../AdminPanel/pages/Dashboard";
import Login from "../../AdminPanel/pages/Login"; // Assuming Login component for admin
// import SubcategoryPage from '../Page/CatagoriesPart/SubcategoryPage';
// import { AdminLogin } from '../AdimLogin/AdminLogin';
import AdminDashboard from "../AdimLogin/AdminDashboard/AdminCategory";
// import EditSubCategory from '../AdimLogin/AdminDashboard/EditSubCategory';
// import SubcategoryDetail from '../Page/CatagoriesPart/SubcategoryDetail ';

import NewsSection from "../Page/LandigPage/NewsSection";
import SubcategoryDetail from "../Page/CatagoriesPart/SubcategoryDetail ";
import Footer from "../Page/Footer";
import Contact from "../Page/ContactUs";
import BurhanpurBlog from "../Page/Blog";
import RegisterPage from "../ui/RegisterPage";
import UserLogin from "../ui/UserLogin";

const RouteShow = () => {
  const location = useLocation();

  const showNavbar = true;

  return (
    <div>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/edit-subcategory/:id" element={<EditSubCategory />} /> */}
        <Route path="newssection" element={<NewsSection />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/subcategory/:categoryId/subcategory/:subId"
          element={<SubcategoryDetail />}
        />
        {/* <Route path="/Login" element={<LoginPage />} /> */}
        <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
        {/* Admin Panel Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        {/* Fixed Register route spelling */}
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/edit-subcategory/:id" element={<EditSubCategory />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/category/:categoryId/subcategory/:subId"
          element={<SubcategoryDetail />}
        />
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/explore" element={<Explore />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/railwaystation" element={<Railway />} />{" "}
        {/* fixed spelling & case */}
        <Route path="/shahiqila" element={<ShahiQila />} />{" "}
        {/* better kebab-case */}
        <Route path="/dargahhakimi" element={<DargahHakimi />} />{" "}
        {/* better kebab-case */}
        <Route path="/category" element={<CategorySection />} />{" "}
        {/* added this route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/burhanpurblog" element={<BurhanpurBlog />} />
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default RouteShow;
