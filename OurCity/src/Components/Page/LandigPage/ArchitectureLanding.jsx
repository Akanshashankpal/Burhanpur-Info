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
        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        @keyframes panBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .background-animated {
          animation: panBackground 30s linear infinite;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          position: relative;
          width: 100vw;
          height: 100vh; /* Full viewport height */
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .background-animated::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 900px;
          width: 100%;
          padding: 0 1rem;
          box-sizing: border-box;
        }

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

        h1 {
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: #facc15;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.8);
          font-size: 3rem;
        }

        p {
          margin-bottom: 2rem;
          font-weight: 500;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
          font-size: 1.25rem;
        }

        .search-box {
          background-color: white;
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          border: 1px solid white;
          transition: transform 0.7s ease;
          max-width: 100%;
        }

        .search-box:hover {
          transform: scale(1.02);
        }

        .search-box input,
        .search-box select {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          border-radius: 1rem;
          border: none;
          background-color: #f3f4f6;
          color: black;
          font-size: 1rem;
          outline: none;
          transition: box-shadow 0.3s ease;
        }

        .search-box input::placeholder {
          color: #4b5563;
        }

        .search-box input:focus,
        .search-box select:focus {
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.5);
          background-color: white;
        }

        .search-box button {
          width: 100%;
          padding: 0.75rem;
          border-radius: 1rem;
          background: linear-gradient(to right, #ec4899, #f97316, #eab308);
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(236, 72, 153, 0.6);
          transition: background 0.3s ease;
        }

        .search-box button:hover {
          background: linear-gradient(to right, #db2777, #ea580c, #ca8a04);
        }

        .search-box .icon-location {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.25rem;
          }

          p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .search-box {
            padding: 1rem;
          }
        }

        @media (max-width: 400px) {
          h1 {
            font-size: 1.75rem;
          }

          .search-box input,
          .search-box select {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow relative w-full">
          <div
            className="background-animated"
            style={{ backgroundImage: `url(${bgImage})` }}
            ref={headingRef}
          >
            <div className="content-wrapper">
              <h1 className={`${showFlipText ? "animate-flipInX" : "opacity-0"}`}>
                Welcome to <br /> The Historical City of Heritage & Glory
              </h1>

              <p
                className={`${
                  showFadeText ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700`}
              >
                Discover the hidden gems of Mughal brilliance, majestic forts,
                and sacred shrines that have gracefully stood the test of time
                in the heart of Madhya Pradesh. Immerse yourself in a journey
                where history whispers from every stone, unveiling stories of
                valor, culture, and timeless heritage that await your
                exploration around every corner.
              </p>

              {showSearchBox && (
                <div className="search-box animate-zoomIn relative">
                  <input
                    type="text"
                    placeholder="🔍 What are you looking for?"
                    spellCheck={false}
                  />
                  <select>
                    <option>🏰 Places</option>
                    <option>🏨 Hotels</option>
                    <option>🍽️ Restaurants</option>
                  </select>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="📍 Location"
                      className="pr-10"
                      spellCheck={false}
                    />
                    <FaMapMarkerAlt className="icon-location" />
                  </div>
                  <button>
                    <FaSearch />
                    Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ArchitectureLanding;
