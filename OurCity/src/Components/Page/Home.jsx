import Footer from "./Footer";
// import CategorySection from "./CategoriesPart/CategorySection";
import ArchitectureLanding from "./LandigPage/ArchitectureLanding";
import HistoricalTimeline from "./LandigPage/HistoricalTimeline";
import ContactForm from "./LandigPage/ContactForm";
import TopAttractions from "./LandigPage/TopAttractions"
import CategorySection from "./CatagoriesPart/CategorySection";
import CitySlider from "./MainSlider/CItySlider";
// import AdminDashboard from "../AdminLogin/AdminDashboard/AdminCategory";
// import NewsSection from "./LandingPage/NewsSection";

const Home = () => {
  return (
    <div style={{ margin: "10px" }}>
      {/* Optional: Uncomment for admin panel */}
      {/* <AdminDashboard /> */}

      <ArchitectureLanding />
      <br />
      <CitySlider/>
      <br />
      <CategorySection/>
      <br />
      <HistoricalTimeline/>
      <br />
      <TopAttractions/>
      <br />
      <ContactForm/>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
