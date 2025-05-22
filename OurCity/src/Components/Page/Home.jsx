
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import CItySlider from "./MainSlider/CItySlider";
// import BurhanpurPage from "./LandigPage/BurhanpurPage";
import ArchitectureLanding from "./LandigPage/ArchitectureLanding";
// import CityCategories from "./LandigPage/CityCategories";
import Footer from "./Footer";
import HistoricalTimeline from "./LandigPage/HistoricalTimeline";
import ContactForm from "./LandigPage/ContactForm";
// import CultureSection from "./LandigPage/cultureItems";
import TopAttractions from "./LandigPage/TopAttractions";
import CategorySection from "./CatagoriesPart/CategorySection";
// import Banner from "../Promo/banner";


const Home = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Delay popup for 2 seconds after page load
    const timer = setTimeout(() => setShowPromo(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.95, y: 30 }}
    //   animate={{ opacity: 1, scale: 1, y: 0 }}
    //   transition={{
    //     duration: 0.7,
    //     ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier easing
    //   }}
    //   className="p-4"
    // >
    <div style={{
      margin: '10px',
      // border:'2px solid red'
    }}>

      {/* <BurhanpurPage/> */}
      <ArchitectureLanding />
      <br />
      <br />
      <CItySlider />
      <br />
      <CategorySection />

      <br />
      <br />
      <HistoricalTimeline />
      <br />
      {/* <CultureSection/> */}
      <TopAttractions />
      <br />
      <ContactForm />
      <br />
      <Footer />
      <br />
{/* {showPromo && <Banner onClose={() => setShowPromo(false)} />} */}
    </div>
    // </motion.div>
  );
};

export default Home;
