import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import tajmahal from '../LandigPage/img/tajmahal.jpg';
import asirgarh from '../LandigPage/img/asirgarh.jpg';

const TopAttractions = () => {
  const attractions = [
    {
      title: 'Taj Mahal of Burhanpur',
      description: 'A lesser-known masterpiece radiating Mughal elegance and romance.',
      img: tajmahal,
      alt: 'View of Taj Mahal of Burhanpur',
    },
    {
      title: 'Shahi Qila',
      description: 'An imposing royal fortress echoing tales of valor and history.',
      img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=70',
      alt: 'Shahi Qila, historic fort',
    },
    {
      title: 'Jama Masjid',
      description: 'A grand mosque representing Burhanpur’s Islamic heritage and architectural grandeur.',
      img: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=70',
      alt: 'Jama Masjid, mosque',
    },
    {
      title: 'Dargah-e-Hakimi',
      description: 'A serene and spiritual pilgrimage site for Dawoodi Bohras from around the world.',
      img: 'https://images.unsplash.com/photo-1604085504404-43449b4a58a5?auto=format&fit=crop&w=600&q=70',
      alt: 'Dargah-e-Hakimi shrine in Burhanpur',
    },
    {
      title: 'Asirgarh Fort',
      description: 'Majestic hilltop fort offering panoramic views and historical military significance.',
      img: asirgarh,
      alt: 'Asirgarh Fort landscape view',
    },
    {
      title: 'Raja Ki Chhatri',
      description: 'An architectural gem on the banks of the Tapti River, famous for its symmetry and peace.',
      img: 'https://images.unsplash.com/photo-1616766953802-1336714c0f37?auto=format&fit=crop&w=600&q=70',
      alt: 'Raja Ki Chhatri memorial site',
    },
  ];

  return (
    <section id="attractions" aria-labelledby="attractions-title" className="py-20 bg-gradient-to-b from-amber-100 to-yellow-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 id="attractions-title" className="text-4xl sm:text-5xl font-bold mb-12 font-serif text-amber-800 animate-fade-in">Top Attractions</h2>
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
              <article
                role="listitem"
                tabIndex="0"
                className="rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-amber-400/50 transform hover:-translate-y-2 transition-all duration-300 border border-amber-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={place.img}
                    alt={place.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold text-amber-700 mb-2 font-serif">{place.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-light">{place.description}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopAttractions;
