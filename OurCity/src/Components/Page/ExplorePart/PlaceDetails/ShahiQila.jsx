import React, { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';
import ImageSlider from './PlaceImg/Slider/ImageSlider';

const ShahiQila = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <Atom color="#fa0606" size="medium" text="" textColor="#f40c0c" />
        </div>
      )}

      {!loading && (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-12 font-sans">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">🏰 Shahi Qila, Burhanpur</h1>
            <p className="text-lg text-gray-500 mt-2">A Royal Marvel of Mughal Architecture</p>
          </div>

          {/* Image Slider */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageSlider />
          </div>

          {/* Overview */}
          <section className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <h2 className="text-2xl font-semibold text-gray-800">📝 Overview</h2>
            <p>
              Shahi Qila is one of the most iconic monuments in Burhanpur, built during the Mughal era.
              Situated on the banks of the Tapti River, this royal fort once served as a residence to Shah Jahan and Mumtaz Mahal.
            </p>
            <p>
              It features stunning architecture, a royal hammam (bath) made especially for Mumtaz Mahal, and intricate artwork on its walls and ceilings.
            </p>
            <p>
              The fort also includes hidden tunnels and an advanced water system, showcasing the brilliance of Mughal engineering and aesthetics.
            </p>
          </section>

          {/* Address */}
          <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📍 Address</h2>
            <p className="text-gray-700 text-base">
              Shahi Qila, Near Tapti River, Burhanpur, Madhya Pradesh 450331, India
            </p>
          </section>

          {/* Historical Timeline */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">📜 Historical Highlights</h2>
            <ul className="list-disc pl-5 text-gray-700 text-base">
              <li><strong>16th Century:</strong> Constructed by the Farooqi dynasty and later expanded by Mughals.</li>
              <li><strong>1620s:</strong> Shah Jahan resided here with Mumtaz Mahal during his campaigns.</li>
              <li><strong>Hammam:</strong> Specially built for Mumtaz with natural cooling techniques.</li>
              <li><strong>Modern Era:</strong> Preserved as a heritage site under ASI (Archaeological Survey of India).</li>
            </ul>
          </section>

          {/* Features & Architecture */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">🏛️ Key Features</h2>
            <ul className="list-disc pl-5 text-gray-700 text-base">
              <li>Royal Hammam with frescoes and Mughal tile work</li>
              <li>Secret passageways and underground chambers</li>
              <li>View of Tapti River from the ramparts</li>
              <li>Inscriptions and Persian art on walls</li>
            </ul>
          </section>

          {/* Nearby Attractions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">📍 Nearby Attractions</h2>
            <ul className="list-disc pl-5 text-gray-700 text-base">
              <li><strong>Zenana Hammam:</strong> Mughal royal bath specially designed for women, located within Shahi Qila itself.</li>
              <li><strong>Black Taj (Kala Taj):</strong> An unfinished tomb said to be intended for Shah Jahan, located close to the fort.</li>
              <li><strong>Diwan-e-Aam:</strong> The Hall of Public Audience with Mughal arches and columns, inside the Shahi Qila complex.</li>
              <li><strong>Tapti Ghat:</strong> A peaceful riverside ghat next to the fort, ideal for viewing sunsets and historic ambiance.</li>
            </ul>
          </section>

          {/* Embedded Map */}
          <section className="rounded-xl overflow-hidden shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🗺️ Location Map</h2>
            <iframe
              title="Shahi Qila Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1238489732774!2d76.22823707537598!3d21.305450580417404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd823e8145f113b%3A0x82104b6e0bfe5e1b!2sShahi%20Qila!5e0!3m2!1sen!2sin!4v1682682950003!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </section>

          {/* Useful Links */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">🔗 Useful Links</h2>
            <ul className="list-disc pl-5 text-blue-600 text-base">
              <li><a href="https://www.google.com/maps/place/Shahi+Qila" target="_blank" rel="noopener noreferrer">View on Google Maps</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Shahi_Qila,_Burhanpur" target="_blank" rel="noopener noreferrer">Wikipedia Page</a></li>
              <li><a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer">Archaeological Survey of India</a></li>
            </ul>
          </section>
        </div>
      )}
    </>
  );
};

export default ShahiQila;
