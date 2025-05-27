import React, { useEffect, useState, useRef } from "react";
import bgImage from "../LandigPage/img/shanwaramain.jpg";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../ui/Navbar";

function ArchitectureLanding() {
  const [showFlipText, setShowFlipText] = useState(false);
  const [showFadeText, setShowFadeText] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const headingRef = useRef(null);

  const triggerAnimations = () => {
    setShowFlipText(false);
    setShowFadeText(false);
    setShowSearchBox(false);

    setTimeout(() => setShowFlipText(true), 100);
    setTimeout(() => setShowFadeText(true), 400);
    setTimeout(() => setShowSearchBox(true), 700);
  };

  useEffect(() => {
    triggerAnimations();

    if (!headingRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimations();
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes panBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

.background-animated {
animation: panBackground 30s linear infinite;
background-size: cover; /* ✅ Changed from 200% auto to cover */
background-repeat: no-repeat;
background-position: center center;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 90%;
}

        /* Black overlay using ::after */
        .background-animated::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        /* Flip in X animation */
        @keyframes flipInX {
          0% {
            transform: perspective(400px) rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
        }
        .animate-flipInX {
          animation: flipInX 0.8s ease forwards;
          backface-visibility: visible;
          transform-style: preserve-3d;
        }

        /* Zoom In animation */
        @keyframes zoomIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.7s ease forwards;
        }

        .search-box {
          background: rgba(255 255 255 / 0.9);
          border-radius: 2rem;
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.25);
          padding: 1rem 1.5rem;
          max-width: 100%;
          width: 70%;
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          user-select: none;
          transition: box-shadow 0.3s ease;
          margin-left: auto;
          margin-right: auto;
        }

        .search-box:hover {
          box-shadow: 0 12px 36px rgb(0 0 0 / 0.4);
        }

        .search-box input,
        .search-box select {
          flex: 1;
          border: none;
          border-radius: 1.25rem;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          outline: none;
          color: #111827;
          background-color: #f9fafb;
          transition: box-shadow 0.2s ease;
          user-select: text;
          min-width: 0;
        }

        .search-box input::placeholder {
          color: #6b7280;
        }

        .search-box input:focus,
        .search-box select:focus {
          box-shadow: 0 0 0 3px rgb(236 72 153 / 0.5);
          background-color: white;
        }

        .search-box select {
          max-width: 130px;
          cursor: pointer;
        }

        .search-box button {
          background: linear-gradient(to right, #ec4899, #f97316, #eab308);
          border-radius: 1.5rem;
          border: none;
          padding: 0.75rem 1.75rem;
          font-weight: 700;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 8px 20px rgb(236 72 153 / 0.7);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          user-select: none;
          white-space: nowrap;
        }

        .search-box button:hover {
          background: linear-gradient(to right, #db2777, #ea580c, #ca8a04);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          .search-box {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem 1.25rem;
            align-items: stretch;
          }
          .search-box select,
          .search-box input,
          .search-box button {
            width: 100%;
          }
        }

        @media (max-width: 400px) {
          h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="relative w-full h-screen overflow-hidden">

        <Navbar />

        {/* Background with animation */}
        <div
          className="background-animated "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Content overlay */}
          <div
            ref={headingRef}
            className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 mt-10 h-full"
          >
            <h1
              className={`text-2xl md:text-5xl font-bold mb-2 max-w-2xl ${showFlipText ? "animate-flipInX" : "opacity-0"
                } text-yellow-400`}
            >
              Welcome to <br /> The Historical City of Heritage & Glory
            </h1>

            <p
              className={`text-md max-w-xl mb-5 mt-5 transition-opacity duration-700 ${showFadeText ? "opacity-100" : "opacity-0"
                }`}
            >
              Discover the hidden gems of Mughal brilliance, majestic forts, and sacred shrines that have gracefully stood the test of time in the heart of Madhya Pradesh.
              Immerse yourself in a journey where history whispers from every stone, unveiling stories of valor, culture, and timeless heritage that await your exploration around every corner.
            </p>

            {showSearchBox && (
                <form
                  className="search-box"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Search submitted!");
                  }}
                >
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    spellCheck={false}
                    required
                    aria-label="Search query"
                  />

                  <select aria-label="Select category" defaultValue="Places">
                    <option value="Places">🏰 Places</option>
                    <option value="Hotels">🏨 Hotels</option>
                    <option value="Restaurants">🍽️ Restaurants</option>
                    <option value="Events">🎉 Events</option>
                    <option value="Shops">🛍️ Shops</option>
                  </select>

                  <button type="submit">
                    Search <FaSearch />
                  </button>
                </form>
              )}
            </div>
          </div>
      </div>
    </>
  );
}

export default ArchitectureLanding;
