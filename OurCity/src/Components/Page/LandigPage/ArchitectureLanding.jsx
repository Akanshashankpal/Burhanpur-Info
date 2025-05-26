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
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 90%;
        }

        .background-animated::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(112, 108, 108, 0.4);
          z-index: 1;
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
      `}</style>

      <div className="relative w-full h-screen ">
        <Navbar />

        <div
          className="background-animated"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div
            ref={headingRef}
            className="relative z-10 flex flex-col items-flex  justify-center text-left text-white px-4 mt-20 h-full"
          >
            <h1
              className={`text-xl md:text-3xl font-semibold mb-2 max-w-2xl ${
                showFlipText ? "animate-flipInX" : "opacity-0"
              } text-yellow-400`}
            >
              Welcome to <br /> The Historical City of Heritage & Glory
            </h1>

            <p
              className={`text-sm md:text-base max-w-md mb-4 mt-3 transition-opacity duration-700 ${
                showFadeText ? "opacity-100" : "opacity-0"
              }`}
            >
              Discover hidden gems of Mughal brilliance, forts, and sacred shrines in Madhya Pradesh. History whispers from every stone — waiting to be explored.
            </p>

            {showSearchBox && (
              <div className="relative w-full max-w-sm bg-white rounded-2xl p-4 space-y-3 text-black shadow-xl border border-white transform hover:scale-[1.02] transition-transform duration-700 animate-zoomIn">
                <input
                  type="text"
                  placeholder="🔍 What are you looking for?"
                  className="w-full p-2.5 text-sm rounded-xl bg-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                />
                <select className="w-full p-2.5 text-sm rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option>🏰 Places</option>
                  <option>🏨 Hotels</option>
                  <option>🍽 Restaurants</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="📍 Location"
                    className="w-full p-2.5 text-sm pr-10 rounded-xl bg-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  />
                  <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                </div>
                <button className="w-full flex items-center justify-center gap-2 p-2.5 text-sm bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-yellow-500 transition duration-300 shadow-md">
                  <FaSearch />
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArchitectureLanding;
