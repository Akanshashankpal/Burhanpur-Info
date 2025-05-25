import CItySlider from "./MainSlider/CItySlider";
import ArchitectureLanding from "./LandigPage/ArchitectureLanding";
import Footer from "./Footer";
import HistoricalTimeline from "./LandigPage/HistoricalTimeline";
import ContactForm from "./LandigPage/ContactForm";
import TopAttractions from "./LandigPage/TopAttractions";
import CategorySection from "./CatagoriesPart/CategorySection";
import BurhanpurBlog from "../Page/Blog"; // adjust the path if needed

const Home = () => {
  return (
    <div className="pt-20 m-4 space-y-10"> {/* 👈 This line is important */}
      <ArchitectureLanding />
      <CItySlider />
      <CategorySection />
      <HistoricalTimeline />
      <TopAttractions />
      <BurhanpurBlog />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
