import React from "react";
import bgImage from "../LandigPage/img/shanwaramain.jpg";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../ui/Navbar";

function ArchitectureLanding() {
  return (
    <div className="relative w-full">
      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay (if needed, you can uncomment and style it) */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-0" /> */}

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl font-bold mb-3 max-w-md">
            Welcome to <br /> The Historical City of Heritage & Glory
          </h1>
          <p className="text-base max-w-md mb-8">
            Explore the hidden gems of Mughal brilliance, grand forts, and
            sacred shrines that have stood the test of time in the heart of
            Madhya Pradesh. Let history unfold around every corner.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-md bg-white rounded-2xl p-4 space-y-3 text-black">
            <input
              type="text"
              placeholder="What are You looking For ?"
              className="w-full p-3 rounded-lg bg-gray-100 outline-none"
            />
            <select className="w-full p-3 rounded-lg bg-gray-100 outline-none">
              <option>Places</option>
              <option>Hotels</option>
              <option>Restaurants</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 rounded-lg bg-gray-100 outline-none pr-10"
              />
              <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <button className="w-full flex items-center justify-center gap-2 p-3 bg-[#f92f57] text-white font-semibold rounded-lg hover:bg-[#e91e51] transition">
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureLanding;
