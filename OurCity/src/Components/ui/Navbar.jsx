// Navbar.jsx

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
// import { CartIcon } from "../AllIcons/CartIcon";
import { AddListing } from "../AllIcons/AddListing";
import UserIcon from "../AllIcons/UserIcon";
import { NavLink } from "react-router-dom";
import img from "../ui/Images/logo.jpg";
// import NewaIcon from "../AllIcons/NewsIcon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [{ name: "Home", path: "/" }];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={img}
              alt="logo"
              className="w-11 h-11 rounded-full border-2 border-pink-500 transition-transform duration-300 hover:scale-110"
            />
            <span
              className={`font-bold text-xl transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              }`}
            >
              Burhanpur - The Historical City
            </span>
          </NavLink>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-lg relative">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-pink-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-pink-600 after:rounded-full"
                      : scrolled
                      ? "text-gray-700 hover:text-pink-600"
                      : "text-white hover:text-pink-300"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            {/* Explore submenu */}
            <div
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
              className="relative"
            >
              <span
                className={`px-2 py-1 flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
                }`}
              >
                Explore <span className="text-xs select-none">▼</span>
              </span>
              {exploreOpen && (
                <ul className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 w-48 z-50">
                  <li>
                    <NavLink
                      to="/explore-more"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
                    >
                      More Explore
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/categories"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
                    >
                      Categories
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Page submenu */}
            <div
              onMouseEnter={() => setPageOpen(true)}
              onMouseLeave={() => setPageOpen(false)}
              className="relative"
            >
              <span
                className={`px-2 py-1 flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
                }`}
              >
                Page <span className="text-xs select-none">▼</span>
              </span>
              {pageOpen && (
                <ul className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 w-48 z-50">
                  <li>
                    <NavLink
                      to="/contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <NavLink to="/login" aria-label="User Login">
              <UserIcon fill={scrolled ? "#1f2937" : "white"} className="transition-colors duration-300" />
            </NavLink>
            {/* <CartIcon fill={scrolled ? "#1f2937" : "white"} className="transition-colors duration-300" /> */}
            <AddListing fill={scrolled ? "#1f2937" : "white"} className="transition-colors duration-300" />

            {/* Mobile Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="block md:hidden focus:outline-none"
              aria-label="Open menu"
            >
              <img
                src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
                alt="Menu"
                className="h-6 w-6"
                style={{ filter: scrolled ? "none" : "invert(1)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
