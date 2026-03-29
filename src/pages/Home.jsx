import HeroSlider from "../components/HeroSlider";
import "./Home.css";
import ShowcaseSection from "../components/ShowcaseSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="home">
      <HeroSlider />
      <ShowcaseSection/>
      <ContactSection/>
    </div>
  );
}

export default Home;