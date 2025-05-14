import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKGROUND OVERLAY (Light Shadow) */}
          <motion.div
            className="fixed inset-0 bg-black/10 z-40"   // 10% black transparent shadow
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* SIDEBAR PANEL */}
          <motion.div
            initial={{ x: "100%" }}         // Start from right side
            animate={{ x: isOpen ? 0 : "100%" }}  // Animate based on isOpen
            exit={{ x: "100%" }}             // Exit to right
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-60 h-full bg-white shadow-lg z-50 p-4"
          >
            {/* Close Button */}
            <button onClick={onClose} className="mb-6 text-right w-full text-xl font-bold">
              X
            </button>

            {/* Navigation Links */}
            <ul style={{ textAlign: 'left' }} className="space-y-4">
              <li><Link to="/Home" onClick={onClose}>Home</Link></li>
              <li><Link to="/explore" onClick={onClose}>Explore</Link></li>
              <li><Link to="/Pages" onClick={onClose}>Pages</Link></li>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
