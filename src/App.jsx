import AboutSection from "../src/Components/About/AboutSection";
import AvailableSection from "../src/Components/Available/AvailableSection";
import FeatureSection from "../src/Components/Feature/FeatureSection";
import FQASection from "../src/Components/FQA/FQASection";

import CTASection from "./Components/CTA/CTASection";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar";
import TeamSection from "./Components/Team/TeamSection";
import ContactSection from "./Components/Contact/ContactSection"
import FooterSection from "./Components/Footer/FooterSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSection />
      <AvailableSection />
      <AboutSection />
      <CTASection />
      <FQASection />
      <TeamSection />
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
