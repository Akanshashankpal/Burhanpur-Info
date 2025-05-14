import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { CartIcon } from "../AllIcons/CartIcon";
import { AddListing } from "../AllIcons/AddListing"; // ✅ AddListing import fix
import UserIcon from '../AllIcons/UserIcon';

import { Link } from "react-router-dom";
import img from "../ui/Images/logo.jpg";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src={img}
                            alt="logo"
                            style={{ width: '44px', height: '44px', borderRadius: '50%' }}
                        />
                        <span className={`font-bold text-xl transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
                            JusDial
                        </span>
                    </Link>

                    {/* Right: Icons */}
                    <div className="flex items-center gap-5">
                        <Link to="/Login">
                            <UserIcon fill={scrolled ? "#1f2937" : "white"} />
                        </Link>
                        <CartIcon fill={scrolled ? "#1f2937" : "white"} />
                        <AddListing fill={scrolled ? "#1f2937" : "white"} />

                        {/* Hamburger for mobile */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="block md:hidden focus:outline-none"
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

            {/* Spacer to prevent content being hidden behind navbar */}
            <div className="h-20" />
        </>
    );
};

export default Navbar;