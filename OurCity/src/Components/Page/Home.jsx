import { useState } from "react";
import CItySlider from "./MainSlider/CItySlider";
import ArchitectureLanding from "./LandigPage/ArchitectureLanding";
import Footer from "./Footer";
import HistoricalTimeline from "./LandigPage/HistoricalTimeline";
import ContactForm from "./LandigPage/ContactForm";
import TopAttractions from "./LandigPage/TopAttractions";
import CategorySection from "./CatagoriesPart/CategorySection";
// import AdminDashboard from "../AdimLogin/AdminDashboard/AdminCategory";

const Home = () => {
  // Removed showModal state because modal is also removed
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


      <ArchitectureLanding/>

      <CItySlider />
      <br />
      <CategorySection />
      <br />
      <HistoricalTimeline />
      <br />
      <TopAttractions />
      <br />
      <ContactForm />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
