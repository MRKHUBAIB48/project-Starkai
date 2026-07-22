import Hero from "../components/Hero.jsx";
import ServicesTeaser from "../components/ServicesTeaser.jsx";
import Features from "../components/Features.jsx";
import IntegrationsStrip from "../components/IntegrationsStrip.jsx";
import ProcessTeaser from "../components/ProcessTeaser.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTASection from "../components/CTASection.jsx";
import FAQTeaser from "../components/FAQTeaser.jsx";

function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <Features />
      <IntegrationsStrip />
      <ProcessTeaser />
      <Testimonials />
      <CTASection />
      <FAQTeaser />
    </>
  );
}

export default Home;
