import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "../ui/Images/logo.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle, FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const isDesktop = () => window.innerWidth > 768;

  const toggleExplore = () => {
    setExploreOpen((prev) => !prev);
    if (pageOpen) setPageOpen(false);
  };
  const togglePage = () => {
    setPageOpen((prev) => !prev);
    if (exploreOpen) setExploreOpen(false);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setExploreOpen(false);
    setPageOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-300"
            : "bg-gradient-to-r from-pink-600 via-red-600 to-yellow-500"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3"
            onClick={handleLinkClick}
          >
            <img
              src={img}
              alt="logo"
              className="w-12 h-12 rounded-full border-2 border-pink-500 transition-transform duration-300 hover:scale-110"
            />
            <span
              className={`font-extrabold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              } text-xl md:text-2xl`}
              style={{ fontWeight: 700 }}
            >
              Burhanpur - The Historical City
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 font-semibold text-lg select-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-3 py-1 rounded-md transition-colors duration-300 ${
                  isActive
                    ? "text-pink-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-pink-600"
                    : scrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white hover:text-pink-300"
                }`
              }
            >
              Home
            </NavLink>

            {/* Explore Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => isDesktop() && setExploreOpen(true)}
              onMouseLeave={() => isDesktop() && setExploreOpen(false)}
            >
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
                } focus:outline-none select-none`}
                aria-expanded={exploreOpen}
              >
                Explore <span className="text-sm">▼</span>
              </button>
              {exploreOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg w-48 z-50">
                  <li>
                    <NavLink
                      to="/explore"
                      className="block px-4 py-2 hover:bg-pink-100 text-gray-700"
                      onClick={handleLinkClick}
                    >
                      More Explore
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/category"
                      className="block px-4 py-2 hover:bg-pink-100 text-gray-700"
                      onClick={handleLinkClick}
                    >
                      Categories
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Page Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => isDesktop() && setPageOpen(true)}
              onMouseLeave={() => isDesktop() && setPageOpen(false)}
            >
              <button
                onClick={() => setPageOpen(!pageOpen)}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
                } focus:outline-none select-none`}
                aria-expanded={pageOpen}
              >
                Page <span className="text-sm">▼</span>
              </button>
              {pageOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg w-48 z-50">
                  <li>
                    <NavLink
                      to="/contact"
                      className="block px-4 py-2 hover:bg-pink-100 text-gray-700"
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pages"
                      className="block px-4 py-2 hover:bg-pink-100 text-gray-700"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-pink-600 text-white"
                    : scrolled
                    ? "text-gray-800 hover:bg-pink-100 hover:text-pink-600"
                    : "text-white hover:bg-pink-600 hover:text-white"
                }`
              }
              onClick={handleLinkClick}
            >
              <FaUserCircle size={22} />
              <span className="hidden md:inline text-base font-normal">Login</span>
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-5 py-2 rounded-md font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : scrolled
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`
              }
              onClick={handleLinkClick}
            >
              <span className="hidden md:inline text-base font-normal">Register</span>
            </NavLink>

            <FaPlusCircle
              size={26}
              className={scrolled ? "text-gray-800" : "text-white"}
            />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                if (exploreOpen) setExploreOpen(false);
                if (pageOpen) setPageOpen(false);
              }}
              className={`md:hidden focus:outline-none ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-lg border-t border-gray-300 px-6 py-5 transition-max-height duration-300 ease-in-out overflow-hidden z-50 ${
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className="block py-3 text-gray-800 font-semibold hover:text-pink-600 border-b border-gray-200 text-base"
          >
            Home
          </NavLink>

          {/* Mobile Explore Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={toggleExplore}
              className="w-full flex justify-between items-center py-3 text-gray-800 font-semibold hover:text-pink-600 focus:outline-none text-base"
              aria-expanded={exploreOpen}
            >
              <span>Explore</span>
              <span
                className={`transform transition-transform duration-300 ${
                  exploreOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {exploreOpen && (
              <div className="pl-5 pb-3 flex flex-col space-y-2 text-base">
                <NavLink
                  to="/explore"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-pink-500"
                >
                  More Explore
                </NavLink>
                <NavLink
                  to="/category"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-pink-500"
                >
                  Categories
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Page Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={togglePage}
              className="w-full flex justify-between items-center py-3 text-gray-800 font-semibold hover:text-pink-600 focus:outline-none text-base"
              aria-expanded={pageOpen}
            >
              <span>Page</span>
              <span
                className={`transform transition-transform duration-300 ${
                  pageOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {pageOpen && (
              <div className="pl-5 pb-3 flex flex-col space-y-2 text-base">
                <NavLink
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-pink-500"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/pages"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-pink-500"
                >
                  About Us
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/login"
            onClick={handleLinkClick}
            className="block py-3 text-pink-600 font-semibold border-b border-gray-200 text-base hover:text-pink-800"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            onClick={handleLinkClick}
            className="block py-3 bg-green-500 text-white rounded-md text-center font-semibold mt-3 hover:bg-green-600"
          >
            Register
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
