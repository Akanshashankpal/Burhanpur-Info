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
          background-position: center;
          width: 100%;
          height: 100vh;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
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

      <div className="relative w-full h-screen overflow-hidden">
        <Navbar />

        <div
          className="background-animated"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="overlay" />

          <div
            ref={headingRef}
            className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 h-full"
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-bold mb-4 max-w-2xl ${
                showFlipText ? "animate-flipInX" : "opacity-0"
              } text-yellow-400 leading-snug`}
            >
              Welcome to <br /> The Historical City of Heritage & Glory
            </h1>

            <p
              className={`text-base sm:text-lg md:text-base lg:text-sm xl:text-sm max-w-3xl mb-6 sm:mb-8 transition-opacity duration-700 ${
                showFadeText ? "opacity-100" : "opacity-0"
              }`}
            >
              Discover the hidden gems of Mughal brilliance, majestic forts, and sacred shrines that have stood the test of time in the heart of Madhya Pradesh.
               <br className="hidden md:block" />
                Immerse yourself in a journey where history whispers from every stone.
            </p>

                 

            {showSearchBox && (
              <div className="w-full max-w-md md:max-w-sm lg:max-w-xs bg-white rounded-2xl p-5 sm:p-6 md:p-4 lg:p-3 space-y-3 text-black shadow-2xl border border-white transform hover:scale-[1.01] transition-transform duration-700 animate-zoomIn">
                <input
                  type="text"
                  placeholder="🔍 What are you looking for?"
                  className="w-full p-3 md:p-2 text-base md:text-sm rounded-xl bg-gray-100 placeholder-gray-600 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                />
                <select className="w-full p-3 md:p-2 text-base md:text-sm rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option>🏰 Places</option>
                  <option>🏨 Hotels</option>
                  <option>🍽️ Restaurants</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="📍 Location"
                    className="w-full p-3 md:p-2 text-base md:text-sm rounded-xl bg-gray-100 placeholder-gray-600 pr-10 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  />
                  <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <button className="w-full flex items-center justify-center gap-2 p-3 md:p-2 text-base md:text-sm bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-yellow-500 transition duration-300 shadow-md">
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
