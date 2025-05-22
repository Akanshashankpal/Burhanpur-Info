import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { CartIcon } from "../AllIcons/CartIcon";
import { AddListing } from "../AllIcons/AddListing";
import UserIcon from '../AllIcons/UserIcon';
import { NavLink } from "react-router-dom";
import img from "../ui/Images/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav links as per your request
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Page", path: "/page" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${scrolled
            ? "bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-300"
            : "bg-transparent"
          }
        `}
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
              className={`font-bold text-xl transition-colors duration-300
                ${scrolled ? "text-gray-900" : "text-white drop-shadow-lg"}
              `}
            >
              Burhanpur - The Historical City
            </span>
          </NavLink>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
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
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <NavLink to="/login" aria-label="User Login">
              <UserIcon fill={scrolled ? "#1f2937" : "white"} className="transition-colors duration-300" />
            </NavLink>
            <CartIcon fill={scrolled ? "#1f2937" : "white"} className="transition-colors duration-300" />
            <AddListing fill={scrolled ? "#1f2937" : "white"} className="transition-colors duration-300" />

            {/* Hamburger (mobile) */}
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

      {/* Sidebar for mobile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Spacer so page content not hidden behind navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
