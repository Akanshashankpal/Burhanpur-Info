// src/pages/AboutUs.tsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-28 px-4 md:px-12 bg-gradient-to-b from-white to-pink-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-600 animate-bounce">
        About Burhanpur
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-lg leading-8">
            Burhanpur is a city steeped in history and culture, located on the
            banks of the Tapti River in Madhya Pradesh, India. It was an
            important Mughal outpost and is known for its rich architecture,
            textiles, and strategic significance.
          </p>
          <p className="text-lg leading-8">
            The city is famous for the Shahi Qila, Jama Masjid, and the Tomb of
            Mumtaz Mahal — the beloved wife of Shah Jahan, whose body was
            temporarily buried here before being transferred to the Taj Mahal.
          </p>
          <p className="text-lg leading-8">
            Burhanpur is also known for its unique handloom industry and is a
            center of beautiful cotton fabrics and dyeing techniques. Its
            cultural diversity and historical sites attract many tourists every
            year.
          </p>
        </div>

        {/* Image Section */}
        <div className="animate-fade-in scale-105">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Burhanpur_Fort.jpg"
            alt="Burhanpur Fort"
            className="w-full rounded-xl shadow-lg border-4 border-pink-200"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
