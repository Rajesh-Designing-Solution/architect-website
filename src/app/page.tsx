// import Hero from "./components/Hero"
import Hero from "@/components/Hero";
import BigImage from "../components/BigImage";
import HospitalityProjects from "../components/HospitalityProjects";
import LatestProject from "@/components/LatestProject";
import InResidence from "@/components/InResidence";
import InteriorDesignVideo from "@/components/InteriorDesignVideo";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
function page() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Expertise />
        <LatestProject />
        <BigImage />
        <HospitalityProjects />
        <InteriorDesignVideo />
        <InResidence />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default page;
