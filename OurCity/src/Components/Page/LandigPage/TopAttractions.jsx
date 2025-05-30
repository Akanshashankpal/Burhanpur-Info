import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import tajmahal from "../LandigPage/img/tajmahal.jpg";
import asirgarh from "../LandigPage/img/asirgarh.jpg";

const TopAttractions = () => {
  const attractions = [
    {
      id: "tajmahal",
      title: "Taj Mahal of Burhanpur",
      description:
        "A lesser-known masterpiece radiating Mughal elegance and romance.",
      img: tajmahal,
      alt: "View of Taj Mahal of Burhanpur",
      link: "/tajMahal",
    },
    {
      id: "shahiQila",
      title: "Shahi Qila",
      description:
        "An imposing royal fortress echoing tales of valor and history.",
      img: "https://scontent.fidr4-3.fna.fbcdn.net/...",
      alt: "Shahi Qila, historic fort",
      link: "/ShahiQila",
    },
    {
      id: "Jama_Masjid",
      title: "Jama Masjid",
      description:
        "A grand mosque representing Burhanpur’s Islamic heritage and architectural grandeur.",
      img: "https://www.trawell.in/admin/images/upload/166078200Burhanpur_Jama_Masjid_Main.jpg",
      alt: "Jama Masjid, mosque",
      link: "/JamaMasjid",
    },
    {
      id: "Dargaah-E-Hakimi",
      title: "Dargah-e-Hakimi",
      description:
        "A serene and spiritual pilgrimage site for Dawoodi Bohras from around the world.",
      img: "https://www.trawell.in/admin/images/upload/166078934Burhanpur_Dargah-E-Hakimi_Main.jpg",
      alt: "Dargah-e-Hakimi shrine in Burhanpur",
      link: "/DargahHakimi",
    },
    {
      id: "Asirgarh_Fort",
      title: "Asirgarh Fort",
      description:
        "Majestic hilltop fort offering panoramic views and historical military significance.",
      img: asirgarh,
      alt: "Asirgarh Fort landscape view",
      link: "/AsirgarhFort",
    },
    {
      id: "Raja_ki_Chhatri",
      title: "Raja Ki Chhatri",
      description:
        "An architectural gem on the banks of the Tapti River, famous for its symmetry and peace.",
      img: "https://www.trawell.in/admin/images/upload/166078838Burhanpur_Raja_Jai_Singh_ki_Chhatri_Main.jpg",
      alt: "Raja Ki Chhatri memorial site",
      link: "/RajaChhatri",
    },
    {
      id: "Gurudwara",
      title: "Gurudwara",
      description:
        "This Gurdwara holds historical significance as it was visited by Guru Nanak Dev Ji",
      img: "https://www.trawell.in/admin/images/upload/166078279Burhanpur_Gurudwara_Bari_Sangat_Patshahi_Main.jpg",
      alt: "Spiritual and historical site",
      link: "/Gurudwara",
    },
  ];

  return (
    <section
      id="attractions"
      aria-labelledby="attractions-title"
      className="py-20 bg-gradient-to-b from-yellow-100 via-amber-50 to-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          id="attractions-title"
          className="text-4xl sm:text-5xl font-bold mb-12 font-serif text-amber-800 animate-fade-in-up"
        >
          Top Attractions
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {attractions.map((place, index) => (
            <SwiperSlide key={index}>
              <Link to={place.link}>
                <article className="group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-amber-300 transform transition-all duration-500 hover:-translate-y-3 border border-amber-200">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={place.img}
                      alt={place.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6 text-left space-y-2">
                    <h3 className="text-2xl font-bold text-amber-700 font-serif group-hover:text-amber-600">
                      {place.title}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700">
                      {place.description}
                    </p>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopAttractions;
