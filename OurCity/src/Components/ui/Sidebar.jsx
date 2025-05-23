import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const activeClass = "text-pink-600 font-bold";
  const inactiveClass =
    "transition-colors duration-200 hover:text-pink-600 hover:bg-pink-100 px-3 py-2 rounded-md";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 p-6 flex flex-col"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="self-end mb-8 text-gray-600 hover:text-pink-600 text-3xl font-extrabold"
              aria-label="Close menu"
            >
              &times;
            </button>

            {/* NAV LINKS */}
            <ul className="flex flex-col gap-5 text-lg font-semibold text-gray-700">
              {/* HOME - now a NavLink with Explore-like hover */}
              <li>
                <NavLink
                  to="/"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? `${activeClass} px-3 py-2 rounded-md bg-pink-600 text-white`
                      : inactiveClass
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* EXPLORE */}
              <li>
                <button
                  onClick={() => setExploreOpen(!exploreOpen)}
                  className="flex items-center justify-between w-full bg-pink-600 text-white px-3 py-2 rounded-md shadow-md hover:bg-pink-700 transition"
                  aria-expanded={exploreOpen}
                  aria-controls="explore-submenu"
                >
                  Explore
                  <span
                    className={`transition-transform duration-300 ml-2 ${
                      exploreOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                <AnimatePresence>
                  {exploreOpen && (
                    <motion.ul
                      id="explore-submenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 mt-2 flex flex-col gap-3 overflow-hidden"
                    >
                      <li>
                        <NavLink
                          to="/explore"
                          onClick={onClose}
                          className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                          }
                        >
                          Explore Main
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/explore/categories"
                          onClick={onClose}
                          className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                          }
                        >
                          Categories
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/railway-station"
                          onClick={onClose}
                          className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                          }
                        >
                          Railway Station
                        </NavLink>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* PAGES */}
              <li>
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex items-center justify-between w-full bg-pink-600 text-white px-3 py-2 rounded-md shadow-md hover:bg-pink-700 transition"
                  aria-expanded={pagesOpen}
                  aria-controls="pages-submenu"
                >
                  Pages
                  <span
                    className={`transition-transform duration-300 ml-2 ${
                      pagesOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                <AnimatePresence>
                  {pagesOpen && (
                    <motion.ul
                      id="pages-submenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 mt-2 flex flex-col gap-3 overflow-hidden"
                    >
                      <li>
                        <NavLink
                          to="/pages"
                          onClick={onClose}
                          className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                          }
                        >
                          Main Pages
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          onClick={onClose}
                          className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                          }
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages"
                          onClick={onClose}
                          className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                          }
                        >
                          About Us
                        </NavLink>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
