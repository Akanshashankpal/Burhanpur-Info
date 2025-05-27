// import React from "react";
// import Slider from "react-slick";
// import promotional from '../../assets/promotional.jpg';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import promo1 from '../../assets/promo1.jpg';
// import promo2 from '../../assets/promo2.jpg';
// const Slides =[
//   { image:promo1 ,title:'Slide 1' },
//   { image:promo2 ,title:'Slide 2' },
//  { image: promotional, title: 'Slide 3' },
//  { image:promo1 ,title:'Slide 4' },
 


// ]


// const PromoSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   const slides = [
//     {
//       title: "Packers & Movers",
//       description: "Get the best deal now!",
//       buttonText: "GET BEST DEAL",
//       image: "/images/movers.jpg",
//     },
//     {
//       title: "Explore Burhanpur",
//       description: "Visit top attractions now",
//       buttonText: "LEARN MORE",
//       image: "/images/burhanpur-promo.jpg",
//     },
//     {
//       title: "Local Food Delivery",
//       description: "Delicious dishes at your doorstep",
//       buttonText: "ORDER NOW",
//       image: "/images/food-promo.jpg",
//     },
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-6">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <div className="bg-white rounded-xl overflow-hidden flex flex-col sm:flex-row items-center shadow-md p-4">
//               <div className="flex-1 text-center sm:text-left">
//                 <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
//                 <p className="mb-4 text-gray-600">{slide.description}</p>
//                 <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
//                   {slide.buttonText}
//                 </button>
//               </div>
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full sm:w-1/2 h-48 object-cover rounded-md mt-4 sm:mt-0"
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PromoSlider;


import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import local images
import promotional from '../../assets/promotional.jpg';
import promo1 from '../../assets/promo1.jpg';
import promo2 from '../../assets/promo2.jpg';
import promo3 from '../../assets/promo3.jpg';

// ✅ Define slides using your imported images
const Slides = [
  { image: promo3, title: 'Local Food Delivery', description: 'Delicious dishes at your doorstep', buttonText: 'ORDER NOW' },
  { image: promotional, title: 'Local Food Delivery', description: 'Delicious dishes at your doorstep', buttonText: 'ORDER NOW' },
  
  { image: promo1, title: 'Packers & Movers', description: 'Get the best deal now!', buttonText: 'GET BEST DEAL' },
  { image: promo2, title: 'Explore Burhanpur', description: 'Visit top attractions now', buttonText: 'LEARN MORE' },
  
];

const PromoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full overflow-x-hidden py-6">
      <Slider {...settings}>
        {Slides.map((slide, index) => (
          <div key={index}>
            <div className="bg-orange-100 rounded-xl overflow-hidden flex flex-col sm:flex-row items-center shadow-md p-4">
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-4 text-gray-600">{slide.description}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                  {slide.buttonText}
                </button>
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full sm:w-1/2 h-48 object-cover rounded-md mt-4 sm:mt-0"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromoSlider;
