import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKGROUND OVERLAY with blur + opacity */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* SIDEBAR PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 p-6 flex flex-col"
          >
            {/* Close Button - better styling */}
            <button
              onClick={onClose}
              aria-label="Close sidebar"
              className="self-end mb-8 text-gray-600 hover:text-pink-600 transition-colors duration-200 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-700">
              <li>
                <Link
                  to="/Home"
                  onClick={onClose}
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  onClick={onClose}
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/Pages"
                  onClick={onClose}
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  Pages
                </Link>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
