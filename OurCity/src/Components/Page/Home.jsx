import { useState } from "react";
import CItySlider from "./MainSlider/CItySlider";
import ArchitectureLanding from "./LandigPage/ArchitectureLanding";
import Footer from "./Footer";
import HistoricalTimeline from "./LandigPage/HistoricalTimeline";
import ContactForm from "./LandigPage/ContactForm";
import TopAttractions from "./LandigPage/TopAttractions";
import CategorySection from "./CatagoriesPart/CategorySection";

const Home = () => {
  // Removed showModal state because modal is also removed
  return (
    <div style={{ margin: "10px" }}>
      <ArchitectureLanding />
      <br />

      {/* Removed Did You Know teaser */}

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
