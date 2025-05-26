

// import { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import { AddListing } from "../AllIcons/AddListing";
// import UserIcon from "../AllIcons/UserIcon";
// import { NavLink } from "react-router-dom";
// import axios from "./../../../axios";
// import Register from "./Images/Register";
// import logo from '../ui/Images/logo.jpg'

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200" : ""}`}>
//         <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
//           <NavLink to="/" className="flex items-center gap-3">
//             <img src={logo} alt="logo" className="w-20 h-20 rounded-full border-2 border-blue-500 hover:scale-110 transition" />
//             <span className={`font-bold text-xl ${scrolled ? "text-gray-900" : "text-white drop-shadow-lg"}`}>Burhanpur - The Historical City</span>
//           </NavLink>

//           <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
//             {/* Add NavLinks here if needed */}
//           </div>

//           <div className="flex items-center gap-6">
//             <button onClick={() => setShowRegisterModal(true)} aria-label="User Register">
//               <UserIcon fill={scrolled ? "#1f2937" : "white"} />
//             </button>
//             <AddListing fill={scrolled ? "#1f2937" : "white"} />
//             <button onClick={() => setSidebarOpen(true)} className="block md:hidden">
//               <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="menu" className="w-8 h-8" />
//             </button>
//           </div>
//         </div>
//       </header>

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
//       <div className="h-20" />

//       {/* Register Modal */}
//       {showRegisterModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
//             <Register onClose={() => setShowRegisterModal(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;






import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { AddListing } from "../AllIcons/AddListing";
import UserIcon from "../AllIcons/UserIcon";
import { NavLink } from "react-router-dom";
import axios from "./../../../axios";
import Register from "./Images/Register";
import logo from '../ui/Images/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user from token on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/Users/getUser", {
            headers: { Authorization:` Bearer ${token} `}
          });
          if (res.data.success) {
            setUser(res.data.user);
          } else {
            localStorage.removeItem("token");
            setUser(null);
          }
        } catch (err) {
          console.error("Auth error:", err);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setShowProfileDropdown(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200" : ""}`}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

          {/* Logo and Title */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-20 h-20 rounded-full border-2 border-blue-500 hover:scale-110 transition" />
            <span className={`font-bold text-xl ${scrolled ? "text-gray-900" : "text-black drop-shadow-lg"}`}>
              Burhanpur - The Historical City
            </span>
          </NavLink>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 relative">
            <NavLink to="/" className={
            ({ isActive }) =>
             ` text-xl font-semibold hover:text-blue-600 transition ${isActive ? "text-blue-600" : scrolled ? "text-gray-700" : "text-black"}`}>
              Home
            </NavLink>

            {/* Explore Dropdown */}
            <div className="relative group">
              <button className={`text-xl font-semibold transition ${scrolled ? "text-gray-700" : "text-black"} group-hover:text-blue-600`}>
                Explore
              </button>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-50">
                <NavLink to="/explore-more" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">More Explore</NavLink>
                <NavLink to="/category" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category</NavLink>
              </div>
            </div>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button className={`text-xl font-semibold transition ${scrolled ? "text-gray-700" : "text-black"} group-hover:text-blue-600`}>
                Pages
              </button>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-50">
                <NavLink to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</NavLink>
                <NavLink to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</NavLink>
              </div>
            </div>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-6">
            {user ? (
              <div className="relative">
                <button onClick={() => setShowProfileDropdown(prev => !prev)} className="rounded-full border-2 border-indigo-500 p-1">
                  <span className="text-indigo-600 font-bold text-lg">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-50 w-60">
                    <p className="text-sm font-semibold">👤 {user.name}</p>
                    <p className="text-sm text-gray-600">📧 {user.email}</p>
                    <p className="text-sm text-gray-600">📱 {user.phone}</p>
                    <button onClick={handleLogout} className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => setShowRegisterModal(true)} aria-label="User Register">
                <UserIcon fill={scrolled ? "#1f2937" : "white"} />
              </button>
            )}

            <AddListing fill={scrolled ? "#1f2937" : "white"} />
            <button onClick={() => setSidebarOpen(true)} className="block md:hidden">
              <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="menu" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="h-20" />

      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
            <Register
              onClose={() => {
                setShowRegisterModal(false);
                // Re-fetch user after closing modal
                const fetchUser = async () => {
                  const token = localStorage.getItem("token");
                  if (token) {
                    try {
                      const res = await axios.get("/Users/getUser", {
                        headers: { Authorization:` Bearer ${token}` }
                      });
                      if (res.data.success) setUser(res.data.user);
                    } catch (err) {
                      console.error("Error fetching user after modal close", err);
                    }
                  }
                };
                fetchUser();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;